var h1 = React.createElement('h1',null,'Intro to React')
var h2 = React.createElement('h2',null,'This is React')

var div = React.createElement('div',{id:'parent',calss:'child2'},[h1,h2])

var root = ReactDOM.createRoot(document.querySelector('#container'))

root.render(div)