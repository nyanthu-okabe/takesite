chrome.runtime.onInstalled.addListener(() => {
  console.log("拡張機能インストールされた");

  alert("Takepon Activate");
  alert("Takeponは、拡張機能 > Takepon Extensionで使用できます");

  const name = prompt("なんとお呼びしますか？");

  if (name) {
    alert(`takepon: ${name}」とお呼びします...`);
    // ここで保存したければ storage に突っ込め
    chrome.storage.local.set({ username: name });
  } else {
    alert("名前はないんですね?... 今日からあなたは、イッヌという名前です、大事にしてね。");
    chrome.storage.local.set({ username: "イッヌ" });
  }
});
