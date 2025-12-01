const vscode = require("vscode");
const { cssSnippets } = require("./snippets");

  const cssMap = new Map(cssSnippets.map(item => [item.label, item]));

function activate(context) {
  // 1️⃣ 注册补全
  const completionProvider = vscode.languages.registerCompletionItemProvider(
    ["javascript", "typescript", "html", "vue"],
    {
      provideCompletionItems(document, position) {
        const line = document.lineAt(position);
        const prefix = line.text.substring(0, position.character);

        // 匹配 a- 开头的
        if (!/a-[\w-]*$/.test(prefix)) return;

        return cssSnippets.map(item => {
          const line = document.lineAt(position);
          const prefixMatch = line.text.substring(0, position.character).match(/a-[\w-]*$/);
          const replaceRange = prefixMatch ?
            new vscode.Range(
              position.line,
              position.character - prefixMatch[0].length,
              position.line,
              position.character
            ) : undefined;

          const maxLabelLength = 13; // 统一 10 个字符
          const paddedLabel = item.label.padEnd(maxLabelLength, ' '); // 右边补空格
          const completion = new vscode.CompletionItem(`${paddedLabel}${item.detail}`, vscode.CompletionItemKind.Keyword);
          completion.range = replaceRange;
          completion.insertText = new vscode.SnippetString(item.insertText || item.label);
          // completion.detail = item.detail; // 右侧小提示,在没选中的时候不显示，选中才显示，不好用

          const formattedStyle = item.style
            .split(';')          // 按分号分割
            .map(s => s.trim())  // 去掉多余空格
            .filter(Boolean)     // 去掉空字符串
            .join(';\n');        // 用分号+换行重新拼接

          completion.documentation = new vscode.MarkdownString(
            `**${item.detail}**\n${item.explain ? `**说明**:\n${item.explain}\n**CSS**:\n` : ''}\`\`\`css\n${formattedStyle};\n\`\`\``
          );
          return completion;
        });
      }
    },
    "-" // 触发字符
  );

  // 2️⃣ 注册 Hover
  const hoverProvider = vscode.languages.registerHoverProvider(
    ["javascript", "typescript", "html", "vue"],
    {
      provideHover(document, position) {
        const range = document.getWordRangeAtPosition(position, /[a-zA-Z0-9\-_]+/);
        if (!range) return;

        const word = document.getText(range);
        const item = cssMap.get(word);

        if (item) {
          const formattedStyle = item.style
            .split(';')          // 按分号分割
            .map(s => s.trim())  // 去掉多余空格
            .filter(Boolean)     // 去掉空字符串
            .join(';\n');        // 用分号+换行重新拼接

          return new vscode.Hover(
            new vscode.MarkdownString(
            `**${item.detail}**\n${item.explain ? `**说明**:\n${item.explain}\n**CSS**:\n` : ''}\`\`\`css\n${formattedStyle};\n\`\`\``
            ),
            range // 指定 hover 范围
          );
        }
      }
    }
  );

  context.subscriptions.push(completionProvider, hoverProvider);
}

function deactivate() { }

module.exports = { activate, deactivate };