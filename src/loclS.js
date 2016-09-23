const list = 'zhaoList'
export default {
  getList(){
    return JSON.parse(window.localStorage.getItem(list)||[]);
  },
  setList(item){
    window.localStorage.setItem(list,JSON.stringify(item))
  }
}
