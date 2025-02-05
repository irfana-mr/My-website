const Data = [
  {
    title: "ZomatoClone",
    source: "https://github.com/irfana-mr",
    exeternal: "https://irfana-mr.github.io/webfile-zom/",
    desc: "Zomato home page clone",
    tech: [{ stack: "HTML" }, { stack: "CSS" }],
  },
  {
    title: "PrinterestClone",
    source: "https://github.com/irfana-mr",
    exeternal: "https://irfana-mr.github.io/sample-website/",
    desc: "Pinterest home page clone",
    tech: [{ stack: "HTML" }, { stack: "CSS" }],
  },
  {
    title: "GoogleClone",
    source: "https://github.com/irfana-mr",
    exeternal: "https://irfana-mr.github.io/goo-web/",
    desc: "Google search page clone",
    tech: [{ stack: "HTML" }, { stack: "CSS" }],
  },
  {
    title: "FoodHub",
    source: "https://github.com/irfana-mr",
    exeternal: "https://irfana-mr.github.io/foodhub/",
    desc: "food hub home page",
    tech: [{ stack: "HTML" }, { stack: "CSS" }],
  },
];

const projectContainer = document.getElementById("projectContent");
const projects = Data.map((project, i) => {
  return `
    <div class="col-lg-6" key=${i}>
        <div class="card shadow">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h5>Featured Project</h5>
                    <div class="links">
                        <a href="${
                          project.source
                        }"><i class="fa fa-github" aria-hidden="true"></i></a>
                        <a href="${
                          project.exeternal
                        }"><i class="fa fa-external-link" aria-hidden="true"></i></a>
                    </div>
                </div>
                <h3>${project.title}</h3>
                <p class="mt-3">${project.desc}</p>
                ${project.tech.map((stack, _i) => {
                  return `
                        <span class="badge rounded-pill">${stack.stack}</span>
                    `;
                })}
            </div>
        </div>
    </div>
      `;
}).join("");

projectContainer.innerHTML = projects;
