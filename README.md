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
        <TabItem id="1" title="Tab1" >
          <TabChild {...some_props} />
        </TabItem>
        <TabItem id="2" title="Tab2" >
          <TabChild {...some_props} />
        </TabItem>
        <TabItem id="3" title="Tab3" >
          <TabChild {...some_props} />
        </TabItem>
      </LeftTabContainer>
```

```javascript
onSelect() {
    /* Your change event here */  
}
```
