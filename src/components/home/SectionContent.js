import img_section2 from "../../assets/img/home/number2.svg";
import img_section3 from "../../assets/img/home/number3.svg";
import img_section4 from "../../assets/img/home/number4.svg";
import img_section5 from "../../assets/img/home/number5.svg";
const description = {
  homeservice:
    "Tortor at risus viverra adipiscing. Scelerisque in dictum non consectetur. Urna neque viverra justo nec ultrices dui sapien eget. In est ante in nibh mauris. In egestas erat imperdiet sed euismod. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Sed id semper risus in hendrerit gravida. Nunc sed velit dignissim sodales ut eu sem. Diam donec adipiscing tristique risus. Massa tempor nec feugiat nisl pretium fusce id velit ut. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus.",
  replaypoint:
    "Tortor at risus viverra adipiscing. Scelerisque in dictum non consectetur. Urna neque viverra justo nec ultrices dui sapien eget. In est ante in nibh mauris. In egestas erat imperdiet sed euismod. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Sed id semper risus in hendrerit gravida. Nunc sed velit dignissim sodales ut eu sem. Diam donec adipiscing tristique risus. Massa tempor nec feugiat nisl pretium fusce id velit ut. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus.",
  airportservice:
    "Tortor at risus viverra adipiscing. Scelerisque in dictum non consectetur. Urna neque viverra justo nec ultrices dui sapien eget. In est ante in nibh mauris. In egestas erat imperdiet sed euismod. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Sed id semper risus in hendrerit gravida. Nunc sed velit dignissim sodales ut eu sem. Diam donec adipiscing tristique risus. Massa tempor nec feugiat nisl pretium fusce id velit ut. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus.",
  replaypointservice:
    "Tortor at risus viverra adipiscing. Scelerisque in dictum non consectetur. Urna neque viverra justo nec ultrices dui sapien eget. In est ante in nibh mauris. In egestas erat imperdiet sed euismod. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Sed id semper risus in hendrerit gravida. Nunc sed velit dignissim sodales ut eu sem. Diam donec adipiscing tristique risus. Massa tempor nec feugiat nisl pretium fusce id velit ut. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus."
};
const sectionContent = [
  {
    img: img_section2,
    label1: "Service à domicile",
    label2: "",
    description: description.homeservice,
    reverse: false
  },
  {
    img: img_section3,
    label1: "Service à domicile",
    label2: "point relais aéroport",
    description: description.replaypoint,
    reverse: true
  },
  {
    img: img_section4,
    label1: "Service Aéroport domicile",
    label2: "",
    description: description.airportservice,
    reverse: false
  },
  {
    img: img_section5,
    label1: "Service point relais",
    label2: "domicile",
    description: description.replaypointservice,
    reverse: true
  }
];
export default sectionContent;
