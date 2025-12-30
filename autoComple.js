const vscode = require('vscode');
const { defaultSnippets } = require('./snippets');

function getRules() {
  const config = vscode.workspace.getConfiguration();

  // return config.get('auto-comple.manage', {})?.filter(t=> t.enable !== false) || [];
  return defaultSnippets.map(t => {
    if (!config.get('auto-completion-suggestion.aapaasTheme.enable', {}) && t.name === 'aapaasTheme') return false
    if (!config.get('auto-completion-suggestion.a-css-helper.enable', {}) && t.name === 'a-css-helper') return false
    return t
  }).filter(Boolean)
}

function autoComple(context) {
  const rules = getRules();
  console.log('rules :>> ', rules);

  const allLanguages = [
    ...new Set(
      Object.values(rules).flatMap(rule => rule.languages || [])
    )
  ];
  const allTriggerCharacters = [
    ...new Set(
      Object.values(rules).flatMap(rule => rule.triggerCharacters || [])
    )
  ];

  /* ================= 补全 ================= */
  const completionProvider = vscode.languages.registerCompletionItemProvider(
    allLanguages,
    {
      provideCompletionItems(document, position) {
        const line = document.lineAt(position);
        const textBeforeCursor = line.text.slice(0, position.character);

        for (const rule of Object.values(rules)) {
          if (!rule.matched || !rule.snippets?.length) continue;

          const reg = new RegExp(rule.matched);
          const match = textBeforeCursor.match(reg);
          if (!match) continue;

          const maxLabelLength = rule.maxLabelLength || 20; // 统一 28 个字符


          return rule.snippets.map(item => {
            const paddedLabel = item.label.padEnd(maxLabelLength, ' '); // 右边补空格
            const completion = new vscode.CompletionItem(
              `${paddedLabel}${item.detail}`,
              vscode.CompletionItemKind.Keyword
            );


            completion.insertText = new vscode.SnippetString(
              item.insertText || item.label
            );
            // completion.detail = item.detail; // 右侧小提示,在没选中的时候不显示，选中才显示，不好用

            completion.documentation = new vscode.MarkdownString(
              formatDoc(item)
            );

            return completion;
          });
        }
      }
    },
    ...allTriggerCharacters
  );

  /* ================= Hover ================= */
  const hoverProvider = vscode.languages.registerHoverProvider(
    allLanguages,
    {
      provideHover(document, position) {
        const range = document.getWordRangeAtPosition(
          position,
          /[a-zA-Z0-9\-_]+/
        );
        if (!range) return;

        const word = document.getText(range);

        for (const rule of Object.values(rules)) {
          const item = rule.snippets?.find(s => s.label === word);
          if (!item) continue;

          return new vscode.Hover(
            new vscode.MarkdownString(formatDoc(item)),
            range
          );
        }
      }
    }
  );

  context.subscriptions.push(completionProvider, hoverProvider);
}

function formatDoc(item) {
  const formattedStyle = item.property
    .split(';')          // 按分号分割
    .map(s => s.trim())  // 去掉多余空格
    .filter(Boolean)     // 去掉空字符串
    .join(';\n');        // 用分号+换行重新拼接
  return `
  **${item.detail || ''}**
  ${item.explain ? `\n\n**说明**:\n${item.explain}` : ''}
  ${item.property ? `\n\n\`\`\`css\n${formattedStyle}\n\`\`\`` : ''}
  `;
}

module.exports = { autoComple };