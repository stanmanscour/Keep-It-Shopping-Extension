import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "30pm4534534545",
    articleSource: 'google.com',
    name: 'Puma - Football NPT - Survêtement - Rouge 65558002', 
    price: '42,99 €', 
    source: 'Asos', 
    liked: false,
    imageUrl: 'https://images.asos-media.com/products/puma-football-nxt-survetement-rouge-65558002/9260601-1-red?$XXL$&wid=513&fit=constrain'
  },
  {
    id: "3opm34534545",
    articleSource: 'google.com',
    name: 'Trench double boutonnage', 
    price: '69,99 €', 
    source: 'Mango', 
    liked: true,
    imageUrl: 'https://st.mngbcn.com/rcs/pics/static/T4/fotos/outfit/S20/41083705_09-99999999_01.jpg?ts=1543401204634&imwidth=480&imdensity=2'
  },
  {
    id: "399xD534534545",
    articleSource: 'google.com',
    name: 'Manteau en laine avec ceinture', 
    price: '99,99 €', 
    source: 'Mango', 
    liked: false,
    imageUrl: 'https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/41040888_91.jpg?ts=1541515601557&imwidth=480&imdensity=2'
  },
  {
    id: "999oa534534545",
    articleSource: 'google.com',
    name: 'VESTE DE COSTUME À BOUTONNAGE CROISÉ EN CHINTZ CON...', 
    price: '69,95 €', 
    source: 'zara', 
    liked: true,
    imageUrl: "https://static.zara.net/photos///2018/I/0/2/p/1564/328/401/8/w/1920/1564328401_1_1_1.jpg?ts=1544802760137"
  },
  {
    id: "a34v54f534534545",
    articleSource: 'google.com',
    name: 'SWEAT KANGOUROU DÉTAIL', 
    price: '25,95 EUR', 
    source: 'Zara', 
    liked: false,
    imageUrl: "https://static.zara.net/photos///2018/I/0/2/p/4087/405/301/2/w/1920/4087405301_1_1_1.jpg?ts=1542374039510"
  },
  {
    id: "34Ffk34534545p",
    articleSource: 'google.com',
    name: 'VESTE DE COSTUME TRAVELER DÉTAIL', 
    price: '69,95 €', 
    source: 'Zara', 
    liked: true,
    imageUrl: "https://static.zara.net/photos///2018/I/0/2/p/9621/314/401/2/w/1920/9621314401_1_1_1.jpg?ts=1534441948538"
  },
  {
    id: "3454fvds534545",
    articleSource: 'google.com',  
    name: 'ASOS - Lot de 5 paires de chaussettes invisibles...', 
    price: '11,99 €', 
    source: 'Asos', 
    liked: false,
    imageUrl: "https://images.asos-media.com/products/asos-lot-de-5-paires-de-chaussettes-invisibles-a-petit-motif-gaufre/7466454-1-multi?$XXL$&wid=513&fit=constrain"
  },
  {
    id: "3454z53453454z5",
    articleSource: 'google.com',
    name: 'Sixth June - Bomber à doublure imitation peau de...', 
    price: '109,90 €', 
    source: 'asos', 
    liked: true,
    imageUrl: "https://images.asos-media.com/products/sixth-june-bomber-a-doublure-imitation-peau-de-mouton-carreaux-rouges/10238432-1-red?$XXL$&wid=513&fit=constrain"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static saveCourse(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course);
          course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
          courses.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => {
          course.id == courseId;
        });
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CourseApi;