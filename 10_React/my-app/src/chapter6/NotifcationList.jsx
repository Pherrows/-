
import React from "react";

import Notification from "./Notifcation";


const reservedNotifications = [
  {
    id: 1,
    message: '안녕하세요, 오늘 일정을 알려드립니다'
  },
  {
    id: 2,
    message: '점심식사 시간입니다.'
  },
  {
    id: 3,
    message: '이제 곧 미팅이 시작됩니다'
  }
];

let timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Notifications: [] // state에 Notifications라는 이름으로 초기값은 빈배열
    };
  }

  // 컴포넌트가 생성될 떄 호출되는 메소드
  componentDidMount() {
    const {Notifications} = this.state;
    timer = setInterval(() => {
      if (Notifications.length < reservedNotifications.length) { //3개보다 작은경우에
        const index = Notifications.length;
        Notifications.push(reservedNotifications[index]); // Notifications 배열에 추가
        this.setState({
          // Notifications: Notifications
          Notifications //ES6차
        });
      } else {
        // 추가 실습2: 언마운트 시키기 위해 작성
        // this.setState({
        //   Notifications: []
        // });

        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.Notifications.map((noti) => {
          return (
            <Notification 
              key={noti.id}
              id={noti.id}
              message={noti.message}
            />
          );
        })}
      </div>
    );
  }

}

export default NotificationList;