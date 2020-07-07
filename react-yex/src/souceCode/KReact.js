function  createElement(type,props,...children){
    console.log(props)
    props.children = children
    let vtype
    if(typeof type === 'string'){
        vtype = 1
    }else{
        if(type.isReactComponent){
            vtype = 3
        }else{
            vtype = 2
        }
    }
    return {
        vtype,
        type,
        props,
    }
}
export class Component{
    static isReactComponent = true
    constructor(props){
        this.props = props
        this.state = {}
    }
    setState(){}
    forceUpdate(){}
}
export default {createElement}