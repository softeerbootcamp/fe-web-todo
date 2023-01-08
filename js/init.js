import { statusList, statusName, TODO, DOING, DONE, JSON_DATA } from "./json_data/json_data.js"
import { mainTag } from "./component/column.js"
import { columnTemplate, cardTemplate } from "./templates/template.js"

statusList.forEach((status) => {
    let newColumn = columnTemplate(statusName[status], JSON_DATA[status].length);
    let cardArea = newColumn.children[1];

    JSON_DATA[status].forEach((data) => {
        cardArea.appendChild(cardTemplate(data.title, data.content, data.author))  
    })
    
    mainTag.appendChild(newColumn);
})