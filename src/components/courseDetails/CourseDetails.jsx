import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCourseData } from "../../api/course";
import Loader from "../../utils/Loader";
function CourseDetails() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const { loading, singleCourse } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(getCourseData(courseId));
  }, []);
  return (
    <>
      {loading ? (<Loader/>
      ) : (
        <div className="flex flex-col  items-center">
          <div className="sm:w-[40%] w-[60%]  border rounded-md flex   object-contain overflow-hidden">
            <img src={singleCourse?.thumbnail} alt="Course image"  />
          </div>
          <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col m-2 ">
            <div>
              <h4 className="text-left  font-medium">Course Name</h4>
              <p className="text-left text-gray-500">{singleCourse?.name}</p>
              <h4 className="text-left font-medium">Instructor Name</h4>
              <p className="text-left text-gray-500">
                {singleCourse?.instructor}
              </p>
              <h4 className="text-left font-medium">Description</h4>
              <p className="text-left text-gray-500">
                {singleCourse?.description}
              </p>
              <h4 className="text-left font-medium">Enrollment Status</h4>
              <p className="text-left text-gray-500">
                {singleCourse?.enrollmentStatus}
              </p>
            </div>
            <div>
              <h4 className="text-left font-medium"> COurse Duration</h4>
              <p className="text-left text-gray-500">
                {singleCourse?.duration}
              </p>
              <h4 className="text-left font-medium">Schedule</h4>
              <p className="text-left text-gray-500">
                {singleCourse?.schedule}
              </p>
              <h4 className="text-left font-medium">Location</h4>
              <p className="text-left text-gray-500">
                {singleCourse?.location}
              </p>
              <h4 className="text-left font-medium">Pre-requisites</h4>
              <ul>
                {singleCourse?.prerequisites?.map((requisite, index) => (
                  <li className="text-left text-gray-500" key={index}>
                    {requisite}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border">
          {singleCourse?.syllabus?.map((syllabus) => (
            <details key={syllabus.week} className="border   p-2 m-2">
              <summary className="text-left font-medium ">
               Week {syllabus.week} - {syllabus.topic}
              </summary>
              <p className="text-left">{syllabus.content}</p>
            </details>
          ))}
          </div>
        </div>
      )}
    </>
  );
}
export default CourseDetails;
