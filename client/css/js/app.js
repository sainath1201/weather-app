(
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      const model = {
        temp: '',
      };
      const view = {
        loginbutton : document.getElementsByClassName("login"),

        setEvent(){
          this.loginbutton.onclick = () => {
            controller.enter();
        };
      },


        init() {
          // initialization
          this.setEvent();
          //view.render();
        },
        render() {
        }
      };
      const controller = {
        enter () {
          
        },
        init() {
          view.init();
        }
      };
      controller.init();
    }
  }
)();
