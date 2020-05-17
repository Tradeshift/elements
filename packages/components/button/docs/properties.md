| Property | Attribute | Type      | Default | Description                                                                                                                           |
| -------- | --------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| type     | type      | secondary | false   | Button type to have different style `primary`, `secondary`, `text`, `accept`, `warning`, `danger`                                     |
| size     | size      | string    | macro   | Size of the button, `macro`, `micro`                                                                                                  |
| busy     | busy      | boolean   | false   | Show busy/loading animation                                                                                                           |
| icon     | icon      | string    | -       | Icon name, see the list of available icons in ts-icon component. Also note that it will hide the slot content unless the type is text |
| disabled | disabled  | boolean   | false   | Determine if the button is disabled. `button-click` event won't be dispatched                                                         |
| dir      | dir       | string    | ltr     | Direction of the button `rtl`, `ltr`                                                                                                  |
| grouped  | grouped   | boolean   | false   | For internal use in `ts-button-group` component                                                                                       |
