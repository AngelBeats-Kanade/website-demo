<template>
  <div id="app">
    <div class="back"></div>
    <h1>“那些最好的程序员不是为了得到更高的薪水或者得到公众的仰慕而编程，</h1>
    <h1>他们只是觉得这是一件有趣的事情。”</h1>
    <img alt="photo" src="./assets/photo.png" />
    <div class="info">
      <ul>
        <li>姓名：肖陶珺</li>
        <li>专业：电子科学与技术</li>
      </ul>
    </div>
    <h2>skills</h2>
    <div class="introduction">
      <div class="clearfix"></div>
      <div class="agileits_skills_grids">
        <div class="col-md-6 agileits_skills_grid">
          <div class="skills">
            <div class="skill1" style="width: 80%"></div>
            <div class="bar">
              <p>HTML / CSS3</p>
            </div>
          </div>
          <div class="skills skills1">
            <div class="skill3" style="width: 75%"></div>
            <div class="bar">
              <p>Javascript</p>
            </div>
          </div>
          <div class="skills skills2">
            <div class="skill4" style="width: 80%"></div>
            <div class="bar">
              <p>C/C++</p>
            </div>
          </div>
          <div class="skills skills3">
            <div class="skill5" style="width: 60%"></div>
            <div class="bar">
              <p>Java</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 agileits_skills_grid">
          <div class="skills">
            <div class="skill1" style="width: 60%"></div>
            <div class="bar">
              <p>python</p>
            </div>
          </div>
          <div class="skills skills1">
            <div class="skill3" style="width: 60%"></div>
            <div class="bar">
              <p>multitasking</p>
            </div>
          </div>
          <div class="skills skills2">
            <div class="skill4" style="width: 70%"></div>
            <div class="bar">
              <p>creative</p>
            </div>
          </div>
          <div class="skills skills3">
            <div class="skill5" style="width: 90%"></div>
            <div class="bar">
              <p>responsible</p>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="contact">
      <h3>联系我</h3>
      <ul>
        <li>
          <a
            href="tencent://message/?uin=2445743081&Site=&Menu=yes"
            target="_blank"
            rel="noopener"
            ><span class="social fa fa-qq">QQ</span></a
          >
        </li>
        <li>
          <a
            href="mailto:angelbeats177@gmail.com?subject=welcome&body=Welcome to my page!"
            target="_blank"
            rel="noopener"
            ><span class="social fa fa-envelope-o">E-mail</span></a
          >
        </li>
        <li>
          <a
            href="https://github.com/AngelBeats-Kanade"
            target="_blank"
            rel="noopener"
            ><span class="social fa fa-github">Github</span></a
          >
        </li>
        <li>
          <a href="" target="_blank" rel="noopener"
            ><span class="social fa fa-phone">(+86)18960519068</span></a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
@import "//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img {
  height: 196.8px;
  width: 189.6px;
  position: relative;
}
h2 {
  position: relative;
  top: 60px;
  z-index: 100;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.info {
  position: relative;
}
.introduction {
  padding: 2em;
  width: 20%;
  position: relative;
  margin: 0 auto;
  background: #f3c794;
}
.skills {
  width: 100%;
  margin: 1em 0 0;
  height: 20px;
  background: #ebebeb;
}
.skills,
.skills1,
.skills2,
.skills3,
.skills4 {
  position: relative;
}
.bar {
  position: absolute;
  top: -60%;
  left: 5%;
}
.bar p {
  color: #212121;
  font-size: 13px;
  text-transform: uppercase;
}
.skill1,
.skill3,
.skill4,
.skill5 {
  height: 100%;
  display: block;
  background-color: #f1de00;
}
.agileits_skills_grids {
  margin: 1em 0 0;
}
.contact a {
  color: black;
  transition: 1s;
}
.contact a:hover {
  color: aliceblue;
}
.back {
  background: url("./assets/back.jpg") center center no-repeat;
  background-size: 100% 100%;
  background-color: #cccccc;
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: -1;
  top: 0;
  left: 0;
  filter: blur(5px);
}
.contact {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
}
</style>
