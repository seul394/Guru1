
    var checkAll = document.querySelectorAll('.checkAll');
                var  chkbox = document.querySelectorAll('.chkbox');
                // 전체선택 클릭시
                for(var x=0; x<checkAll.length; x++){
                    checkAll[x].onclick = function(){
                        var thisParent = this.parentElement.parentElement;
                        var childChkbox = thisParent.querySelectorAll('.chkbox');
                        if(this.checked == false){
                            for(var i=0; i<childChkbox.length; i++){
                                childChkbox[i].checked = false;
                            }
                        }else{
                            for(var i=0; i<childChkbox.length; i++){
                                childChkbox[i].checked = true;
                            }
                        }
                    };
                };

                // 하나라도 체크하지 않는다면 선택 해제
                for(var x=0; x<chkbox.length; x++){
                    chkbox[x].onclick = function(){
                        var thisParent = this.parentElement.parentElement;
                        var thisChkAll = thisParent.querySelector('.checkAll');
                        if(this.checked == false){
                                thisChkAll.checked = false;
                    }
                };
            };

   