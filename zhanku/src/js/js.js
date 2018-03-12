window.onload=function(){
var obj=[
    {
        'id':1,
        'name':'择天记手游套图合集一',
        'img':'images/img1.jpg',
        'purpose':'插画-商业插画',
        'author':'00e5dc.jpg'
    },
    {
        'id':2,
        'name':'《勇敢的心》—腾讯王卡品牌形象创意设计征集',
        'img':'images/img2.jpg',
        'purpose':'平面-吉祥物',
        'author':'00e5dc.jpg'
    },
    {
        'id':3,
        'name':'《方正字迹-尚巍行楷》新字发布',
        'img':'images/img3.jpg',
        'purpose':'平面-字体/字形',
        'author':'00e5dc.jpg'
    },
    {
        'id':4,
        'name':'Knights and horses',
        'img':'images/img4.jpg',
        'purpose':'三维-人物/字形',
        'author':'00e5dc.jpg'
    },
    {
        'id':5,
        'name':'创意素材热搜词-腊八',
        'img':'images/img5.jpg',
        'purpose':'照片素材',
        'author':'00e5dc.jpg'
    },
    {
        'id':1,
        'name':'择天记手游套图合集一',
        'img':'images/img1.jpg',
        'purpose':'插画-商业插画',
        'author':'00e5dc.jpg'
    },
    {
        'id':2,
        'name':'《勇敢的心》—腾讯王卡品牌形象创意设计征集',
        'img':'images/img2.jpg',
        'purpose':'平面-吉祥物',
        'author':'00e5dc.jpg'

    },
    {
        'id':3,
        'name':'《方正字迹-尚巍行楷》新字发布',
        'img':'images/img3.jpg',
        'purpose':'平面-字体/字形',
        'author':'00e5dc.jpg'
    },
    {
        'id':4,
        'name':'Knights and horses',
        'img':'images/img4.jpg',
        'purpose':'三维-人物/字形',
        'author':'00e5dc.jpg'
    },
    {
        'id':5,
        'name':'创意素材热搜词-腊八',
        'img':'images/img5.jpg',
        'purpose':'照片素材',
        'author':'00e5dc.jpg'
    },
]
    var omain=document.getElementById('main');
    var oul=document.querySelectorAll('#main>ul');
        for(var j=0;j<5;j++){
            var li=document.createElement('li');
            li.innerHTML= "<img src="+obj[j].img+" class='zuop'><span class='purpose'><a href='javascript:void(0)'>"+obj[j].name+"</a><a href='javascript:void(0)'>"+obj[j].purpose+"</a></span><span class='author'><a href='javascript:void(0)'><img src=images/"+obj[j].author+"></a><p>s白茶丨</p><p>1小时前</p></span>"
            oul[0].appendChild(li);
        }
        for(var j=0;j<5;j++){
            var li=document.createElement('li');
            li.innerHTML= "<img src="+obj[j].img+" class='zuop'><span class='purpose'><a href='javascript:void(0)'>"+obj[j].name+"</a><a href='javascript:void(0)'>"+obj[j].purpose+"</a></span><span class='author'><a href='javascript:void(0)'><img src=images/"+obj[j].author+"></a><p>s白茶丨</p><p>1小时前</p></span>"
            oul[9].appendChild(li);
        }

    var oTop=document.getElementsByClassName('banner-Top')[0];
    var isHeight=document.documentElement.clientHeight;
    var goTop=oTop.querySelectorAll('a')[0];
    oTop.style.top=isHeight-200+'px';
    window.onscroll=function(){
        var isScroll=document.body.scrollTop||document.documentElement.scrollTop;
        oTop.style.top=isHeight-200+isScroll+'px';
        if(isScroll>=500){
            oTop.style.display='block';
        }else{
            oTop.style.display='none';
        }
       
    }
    goTop.onclick=function(){
        document.body.scrollTop=document.documentElement.scrollTop=0;
    }
   var oli=document.querySelectorAll('.nav>li');
   
   for(var i=0;i<oli.length;i++){
       oli[i].onmouseover=function(){
           if(this.children[1]==undefined){
               return;
           }else{
            this.children[1].style.display='block';
           }
        
       }

       oli[i].onmouseout=function(){
        if(this.children[1]==undefined){
            return;
        }else{
         this.children[1].style.display='none';
        }
       }
   }








}