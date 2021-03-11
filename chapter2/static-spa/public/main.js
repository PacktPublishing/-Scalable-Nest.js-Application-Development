import getMockData from './data.js';

const courses = getMockData();

export default function renderPage(html, render) {
  const container = (nav, heroSection, content) => html`
    <div class="min-h-screen flex flex-col justify-center ">
      ${nav}
      <main class="flex-1 flex flex-col mx-auto w-2/3 my-6">
        ${heroSection} ${content}
      </main>
      <footer class="footer mx-auto ">
        Copyright &copy; 2021 Recourse Education.
      </footer>
    </div>
  `;
  const navBar = () => html`
    <nav class="bg-black text-white p-2 flex px-6">
      <a href="/">
        <svg
          class="h-10 mx-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
          />
        </svg>
        <span>Recourse</span>
      </a>
      <div class="flex-grow">&nbsp;</div>
      <a href="#">
        <svg
          class="h-10 mx-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
          />
        </svg>
        <span class="pl-3">Login</span>
      </a>
    </nav>
  `;
  const courseItem = (course, confirm) => html`
    <div class="card shadow bg-gray-300 m-3 rounded-lg">
      <div class="flex rounded-t-lg justify-center bg-black py-3">
        <img class="h-32" src=${course.thumbnail} />
      </div>
      <div class="h-32 flex flex-col p-3  mt-3">
        <p class="truncate h-32">${course.name}</p>
        <div
          class="bg-gradient-to-r to-blue-400 from-blue-700 rounded p-2 h-10 flex justify-center"
        >
          <a
            href=${confirm ? course.enrolUrl : '#/courses/' + course.id}
            class="mx-auto font-bold"
          >
            ${confirm ? 'Confirm Enrolment' : 'Enrol'}
          </a>
        </div>
      </div>
    </div>
  `;
  const courseDetail = course => html`
    <div class="p-6 flex flex-col ">
      <h1 class="text-2xl py-3 pt-6">${course.name}</h1>
      <p>${course.description}</p>
      <h2 class="text-xl py-3">Prerequisites</h2>
      <p>${course.prerequisites}</p>
      <h2 class="text-xl  py-3">Syllabus</h2>
      <p>${course.syllabus}</p>
      ${courseItem(course, true)}
    </div>
  `;
  const heroSection = () => html`
    <section
      class="hero my-6 mx-auto py-12 px-6 bg-gradient-to-r from-yellow-700 to-yellow-500 rounded-3xl"
    >
      <h1 class="text-4xl">Learning reimagined. Learn anywhere and anytime.</h1>
      <p class="pt-3">
        We have a selection of online courses you can study anywhere and
        anytime.
      </p>
      <div class="cta flex p-6">
        <div class="flex-grow"></div>
        <a href="/login" class="bg-blue-500 h-10 rounded">
          <div class="flex h-10 w-32">
            <span class="py-2 px-4">Signup</span>
            <svg
              class="py-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </a>
      </div>
    </section>
  `;
  const courseListSection = courses => html`
    <section class="my-6 mx-auto">
      <h2 class="text-2xl">Browse Courses</h2>
      <div class="category">
        <h3 class="text-xl p-3 pt-6">Engineering</h3>
        <div class="grid grid-cols-3">
          ${courses
            .filter(item => item.category === 'Engineering')
            .map(item => courseItem(item))}
        </div>
      </div>
      <div class="category mt-3">
        <h3 class="text-xl p-3 pt-6">Science</h3>
        <div class="grid  grid-cols-3">
          ${courses
            .filter(item => item.category === 'Science')
            .map(item => courseItem(item))}
        </div>
      </div>
      <div class="category mt-6">
        <h3 class="text-xl p-3 pt-6">Social Sciences & Arts</h3>
        <div class="grid  grid-cols-3">
          ${courses
            .filter(item => item.category === 'Social Sciences & Arts')
            .map(item => courseItem(item))}
        </div>
      </div>
    </section>
  `;

  const route = location.hash;
  const isCoursesPage = route.includes('courses');
  const Id = route.split('/')[2];
  const course = courses.find(c => c.id === Id);

  switch (true) {
    case isCoursesPage:
      render(container(navBar(), '', courseDetail(course)), document.body);
      break;

    default:
      render(
        container(navBar(), heroSection(), courseListSection(courses)),
        document.body,
      );
  }
}
