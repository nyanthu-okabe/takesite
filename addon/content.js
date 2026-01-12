console.log("Takepon is activate");
const style = document.createElement("style");
style.textContent = `
input {
    background-color: #ffffff;
    border: 1px solid #ccc;
    padding: 6px 15px;
    cursor: pointer;
    font-weight: bold;
    margin-right: 5px;
    transition: 0.15s;
}

input:hover {
    background-color: #e9e9e9;
}
    h4 { color: green; }
    .open { cursor: pointer; }
    #pop-up { display: none; }
    .overlay { display: none; }
    #pop-up:checked + .overlay {
        display: block;
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 999999;
        background: rgba(0,0,0,0.6);
    }
    .window {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 90vw;
        max-width: 360px;
        padding: 20px;
        height: 300px;
        background: #fff;
        transform: translate(-50%, -50%);
    }
    .reject, .accept {
        position: absolute;
        bottom: 32px;
        cursor: pointer;
    }
    .accept { right: 32px; }
    .accept:hover { color: green; }
    button {
        background-color: #ffffff;
        border: 1px solid #ccc;
        padding: 8px 15px;
        cursor: pointer;
        font-weight: bold;
        margin-right: 5px;
        transition: 0.15s;
    }

    button:hover {
        background-color: #e9e9e9;
    }
`;
document.head.appendChild(style);

// --- HTML ---
const html = document.createElement("div");
let tekeponusername;
chrome.storage.local.get(["username"], (result) => {
  tekeponusername = result.username;
});

html.innerHTML = `
<label class="reject" style="bottom: 10px; left: 10px; position: fixed; z-index: 999999;" for="pop-up"><strong>Takepon</strong></label>
<input type="checkbox" id="pop-up" >
<div class="overlay">
    <div class="window">
        <h4>${tekeponusername}さんこんにちは！</h4>

	<img style="width: 300px; height: auto" src="https://www.kk-bestsellers.com/wp-content/uploads/mwimgs/0/a/-/img_0a6c178c763fb74b21a94fa25895f4a331693.jpg">

	<button onclick="location.href='https://takepon.nyanthu.com'" id="btn">takeponと会話</button><br />
	<iframe src="https://takellm.nyanthu.com" width="100%" height="100%">
            このフレームが表示されない場合の代替テキスト
        </iframe>
        <label class="accept" for="pop-up"><strong>Close</strong></label>
    </div>
</div>
`;
document.body.appendChild(html);
