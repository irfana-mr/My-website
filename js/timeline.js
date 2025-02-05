const data = [
  {
    title: "Mern-Stack Development",
    Date: "2025-present",
    desc: "I’m interning at Brototype,specializing in MERN stack Development",
  },
  {
    title: "StylishArt &crafter",
    Date: "2024",
    desc: "I compleated Stylish-Art Course from Nawawin Academy",
  },
  {
    title: "Heigher Secondary(Humanities)",
    Date: "2022-2024",
    desc: "I completed my Plus Two in Humanities from Sivagiri Higher Secondary School",
  },
  {
    title: "SSLC",
    Date: "2021-2022",
    desc: "I completed my 10th grade in high school (SSLC) from Goverment muslim High School",
  },
];
const timelineContainer = document.getElementById("timelineContainer");
const timelines = data
  .map((timeline, i) => {
    return `
        <div class="row content " key='${i}'>
    <div class="col-lg-1 col-md-2 col-sm-3">
        <div class="verticleline"></div>
        <div class="badgele mt-2 mb-2"></div>
        <div class="verticleline"></div>
    </div>
    <div class="col-lg-11 col-md-10 col-sm-9">
        <div class="card shadow">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h5>${timeline.title}</h5>
                    <h4>${timeline.Date}</h4>
                </div>
                <p class="mt-3">${timeline.desc}</p>
            </div>
        </div>
    </div>
</div>  `;
  })
  .join("");
timelineContainer.innerHTML = timelines;
