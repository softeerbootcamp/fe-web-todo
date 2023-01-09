import { statusList, statusName, TODO, DOING, DONE, JSON_DATA } from "./json_data/json_data.js"
import { mainTag } from "./component/column.js"
import { columnTemplate, cardTemplate } from "./templates/template.js"
import { makeCardDragEvent } from "./drag/addDragEvent.js";

statusList.forEach((status) => {
    let newColumn = columnTemplate(statusName[status], JSON_DATA[status].length);
    let cardArea = newColumn.children[1];
    JSON_DATA[status].forEach((data) => {
        let newCard = cardTemplate(data.title, data.content, data.author)
        makeCardDragEvent(newCard)

        cardArea.prepend(newCard)  
    })
    
    mainTag.appendChild(newColumn);
})