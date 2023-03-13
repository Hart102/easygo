import { Data } from "../DataManager/PostData";

export const multiSelector = (element) => document.querySelectorAll(element);
export const singleSelector = (element) => document.querySelector(element)
export const filter_response = (text) => text.replace(/\"/g, ''); 

export const modelAction = (output) => {// Pop up model function
  return{
    openModel(message){
      if(singleSelector('.model').classList.contains('d-none')){
        singleSelector('.model').classList.remove('d-none')
        return output(message)
      }
    },
    closeModel(){
      if(!singleSelector('.model').classList.contains('d-none')){
        singleSelector('.model').classList.add('d-none')
        return output('')
      }
    }
  }
}

export const hideBalance = (element) => {
  if(singleSelector(element).type === 'password') return singleSelector(element).type = 'text'
  return singleSelector(element).type = 'password'
}

export const verify_phone = (number) => {// Phone number validator
  let phone = number, find_characters, find_special_char, result_1, result_2;
  find_characters = /[A-Za-z]/ig; find_special_char = /\W/ig;
  result_1 = phone.match(find_characters);
  result_2 = phone.match(find_special_char);
  if (result_1 !== null || result_2 !== null) return 'Invalid phone number'
  return true
}

export const session_verifier = () => {// Session verifier
  return Data().RecieveData('http://localhost:5000/api/user_session')
  .then(res => {
      return res.data
  })
}