const delete_btn = document.querySelectorAll(".delete-lst");

delete_btn.forEach(item=>{
    item.addEventListener('click',()=>{
        const deleteOption = confirm("선택한 카드를 삭제할까요?");
        if(deleteOption)
            item.parentNode.parentNode.remove();
    })
})