# LeftTabContainer
> **Author:** _yaoang_

React Container with left tabs  

## How to use  
First, you must install this component  
```
npm install --save react-left-tab-container  
```  
secondly import in your page  
```javascript
import LeftTabContainer from 'react-left-tab-container'  
const LeftTabItem = LeftTabContainer.Item;  
```
and then use in your page
```HTML
<LeftTabContainer onSelect={this.handleSelect} activedId={id}>
        <TabItem id="1" title="类型1" >
          <ProductType id={1} />
        </TabItem>
        <TabItem id="2" title="类型2" >
          <ProductType id={2} />
        </TabItem>
        <TabItem id="3" title="类型3" >
          <ProductType id={3} />
        </TabItem>
      </LeftTabContainer>
```

```javascript
onSelect() {
    /* Your change event here */  
}
```
