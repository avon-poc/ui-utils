import { showLoading, hideLoading, showMessage } from '../loaders'
window.document.addEventListener = jest.fn()
// const showMessage = jest.fn();

describe('loader class worked', () => {
    
    it("show loader", () => {
        document.body.innerHTML = "<div id='loading-overlay'  class='active'></div>"
        const spy = jest.spyOn(document, 'getElementById');
        showLoading()
        expect(spy).toBeCalled();
    })

    it("hide loader", () => {
        document.body.innerHTML = "<div id='loading-overlay'></div>"
        const spy = jest.spyOn(document, 'getElementById');
        hideLoading()
        expect(spy).toBeCalled();
    })

    it("show message", () => {
        document.body.innerHTML = "<div id='message-overlay' class='active'></div>"
        document.getElementById('message-overlay').innerHTML = `
            <div>
                <div id="message-overlay-content">Happy</div>
                <button id="message-overlay-close-button">OK</button>
            </div>
            `;
        const spy = jest.spyOn(document, 'getElementById');
        showMessage("happy", '')
        expect(spy).toBeCalled();
    })

    it("hide message", () => {
        document.body.innerHTML = "<div id='message-overlay'></div>"
        document.getElementById('message-overlay').innerHTML = `
            <div>
                <div id="message-overlay-content">Happy</div>
                <button id="message-overlay-close-button">OK</button>
            </div>`;
            showMessage("happy", '')
            const documentClickEvent = new Event('click')
            
            const bodyEle = document.getElementById("message-overlay-close-button")
            bodyEle.dispatchEvent(documentClickEvent)
            console.log(":::::::::::::::::::body::::::::", bodyEle.dispatchEvent(documentClickEvent));
    })

})