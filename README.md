### JSX
jsx 必需只有一个父元素根节点,如果不想用div,可以用幽灵节点(<> </>)

### 函数创建组件
function Hello() {
    return <div>hello</div>
}
1.函数名首字母必需要大写
2.必需有返回值,否则返回null
3. </Hello> <Hello></Hello> 两种方式渲染

### 类组件渲染
class HelloComponent extends React.Component{
    render() {
        return <div>this is classComponet</div>
    }
}
</HelloComponent>  <HelloComponent></HelloComponent>
1.首字母大写
2.继承自 React.Component
3.render函数 又返回值