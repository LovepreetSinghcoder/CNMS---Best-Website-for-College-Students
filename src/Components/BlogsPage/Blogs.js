import React from 'react';
import './Blogs.css';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: 'Success Guide for College Students',
      data: `No matter the area of life, success depends on both working hard and working smartly. This is particularly true of a student's college career, for without the right attention to college studies, the student cannot achieve good grades and may even end up not earning a degree at all.

      As is true in other fields, success in academia requires the development of particular skills that improve one's effectiveness and efficiency. Working hard at college studies is pointless if the correct ideas are not studied and if the student does not make the most of the available study time. That is why it is important for every college student to develop a sound set of study skills. The proper study skills enable students to focus on the correct material when they are studying, and they ensure that students use their time efficiently so that they get the most out of their studies and do not end up allowing their studies to crowd out other important activities and disciplines. Developing good study skills is how college students can study smartly, and there is no shortage of resources available for helping one develop the appropriate study techniques.
      
      Although there are certain study skills that apply to only one subject and not others, the skills for studying well are generally the same whether the student is studying math, history, science, literature, or any other topic. The most important thing that students can do to improve their study skills is to make sure that they have a proper study environment and manage their time effectively. When students study in a location that allows them to focus entirely on their studies, they retain much more of what they are studying. Furthermore, having a well-planned schedule enables one to stay organized and on track in studying for tests and completing written assignments. Many students run into the most problems academically when they fall behind and have to play catch-up for an entire semester. Following a reasonable schedule can prevent this from happening; all it takes is a little planning and a strong commitment to abide by the study schedule that is created.
      
      College students today benefit not only from the many online study resources that assist them in developing excellent study skills but also from the fact that most institutions of higher learning today have a study center where they can receive tutoring, help in establishing good study habits, and other academic assistance. When students fall behind or are having trouble with their studies, these on-campus resources can help them succeed in their studies once more. All that it takes is for the student to be willing to ask for help when necessary, for the individuals that staff these study centers are well-equipped to deal with students in every major.
      
      Whether a student has been studying for a long time or is just starting college, it is almost certain that the learner will benefit from resources that offer guidance on students developing sound study skills. The following resources represent some of the best that the Internet has to offer in making sure that students know how to study effectively and efficiently.`,
      author: 'Admin',
      link: '/blogs/1',
    },
    {
      id: 2,
      title: 'The Student’s Guide to College Planning',
      data: `When planning for college, students should consider their interests and goals.
      Students can choose from many types of institutions, such as four-year colleges and trade schools.
      Keep in mind tuition costs and other key factors when deciding which schools to apply to.
      College planning should start early — ideally as soon as you enter high school.`,
      author: 'Admin',
      link: '/blogs/2',
    },
    // Add more blog objects as needed
  ];

  return (
    <div className="blog-page">
    {/* <h2>Blog Page</h2> */}
    {blogs.map(blog => (
      <div className="blog" key={blog.id}>
        <h3>{blog.title}</h3>
        <p className="blog-data">{blog.data}</p>
        <p>Author: {blog.author}</p>
        <a className="read-more-link" href={blog.link}>Read More</a>
        <hr />
      </div>
    ))}
  </div>
  );
};

export default Blogs;
