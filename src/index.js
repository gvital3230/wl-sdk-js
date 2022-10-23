import {Core_Passport_Login_Enter_NotepadModel} from "../WellnessLiving/Core/Passport/Login/Enter/NotepadModel";
function component() {
    let notepad = new Core_Passport_Login_Enter_NotepadModel();

    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = 'OK'

    return element;
}

document.body.appendChild(component());
