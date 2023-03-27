function EventHandler() {
  
  // 함수 정의해서 쓸 때
  // function alertFunc() {
  //   alert('클릭됨');
  // }
  return (
    <div>
        {/* <span onClick={alertFunc()}>함수정의로 클릭!</span>
        <br/> */}
       <span onClick={() => {alert('클릭됨')}}>함수 정의 안하고 클릭!</span>
        {/* <br/>
        <span onClick={() => {let num =10; num+= 5; console.log(num);}}>숫자계산</span> */}
    </div>

  );

  // 함수 정의하지않고 쓸 때

 
  // 클릭이 되지않아도 alert 창 열림 이렇게 쓰지마 !!! 
  // return (<span onClick={alert('클릭됨!')}>Click!!</span>);

  

}

export default EventHandler;