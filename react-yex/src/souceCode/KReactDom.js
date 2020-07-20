function render(vdom,warpper){
    console.log('rendering')
    let node = initVdom(vdom)
    warpper.appendChild(node);
}
function initVdom(vdom){
    let {vtype} = vdom
    if(!vtype){
        return document.createTextNode(vdom)
    }
    if(vtype === 1){ //原生
        return createNativeElement(vdom)
    }else if(vtype === 2){ //函数
        return  createFuncComp(vdom)
    }else if(vtype === 3){ //class
        return createClassComp(vdom);
    }
}
function createNativeElement(Vnode){
    let {type,props} = Vnode
    const node = document.createElement(type)
    let {key,children,...rest} = props
    Object.keys(rest).forEach( (n,v) =>{
        if(n === "className"){
            node.setAttribute('class',rest[n])
        }else if( n === "htmlFor"){
            node.setAttribute('for',rest[n])
        }else{
            node.setAttribute(n,rest[n])
        }
    })
    children.forEach( (v) => {
        if(Array.isArray(v)){
            v.forEach( (n) => {
                node.appendChild(initVdom(n))
            })
        }else{
            node.appendChild(initVdom(v))
        }
    })
    return node
}
function createFuncComp(Vnode){
    let {type,props} = Vnode
    let vt = type(props)
    return initVdom(vt)
}
function createClassComp(Vnode){
    let {type,props} = Vnode
    let vt  = new type(props)
    return initVdom(vt.render())
}
export default {render}