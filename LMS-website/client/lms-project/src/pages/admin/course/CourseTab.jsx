import RichTextEditor from "@/components/RichTextEditor";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEditCourseMutation, useGetCourseByIdQuery } from "@/features/api/courseApi";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const CourseTab = () => {
  const [input, setInput] = useState({
    courseTitle: "",
    subTitle: "",
    description: "",
    category: "",
    courseLevel: "",
    coursePrice: "",
    courseThumbnail: "",
    additionalInfo: "",
  });
  const params = useParams();
  const courseId = params.courseId;
  const { data: courseByIdData, isLoading: courseByIdLoading } = useGetCourseByIdQuery(courseId,{refetchOnMountOrArgChange:true});
  // const course = courseByIdData?.course;
  useEffect(() => {
    if (courseByIdData?.course) {
    const course = courseByIdData?.course;

      setInput({
        courseTitle: course.courseTitle,
        subTitle: course.subTitle,
        description: course.description,
        category: course.category,
        courseLevel: course.courseLevel,
        coursePrice: course.coursePrice,
        courseThumbnail: course.courseThumbnail,
        additionalInfo: course.additionalInfo,
      })
    }
  }, [courseByIdData])

  const [previewThumbnail, setPreviewThumnail] = useState("");
  const navigate = useNavigate();
 

  const [editCourse, { data, isLoading, isSuccess, error }] = useEditCourseMutation();

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const selectCategory = (value) => {
    setInput({ ...input, category: value });
  };
  const selectCourseLevel = (value) => {
    setInput({ ...input, courseLevel: value });
  };
  const selectThumbnail = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setInput({ ...input, courseThumbnail: file });
      const fileReader = new FileReader();
      fileReader.onloadend = () => setPreviewThumnail(fileReader.result);
      fileReader.readAsDataURL(file);
    }
  };
  const updateCourseHandler = async () => {
    const formData = new FormData();
    formData.append("courseTitle", input.courseTitle);
    formData.append("subTitle", input.subTitle);
    formData.append("description", input.description);
    formData.append("category", input.category);
    formData.append("courseLevel", input.courseLevel);
    formData.append("coursePrice", input.coursePrice);
    formData.append("courseThumbnail", input.courseThumbnail);
    await editCourse({ formData, courseId });
    // console.log(input);
  }
  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message || "Course update.")
    }
    if (error) {
      toast.error(error.data.message || "failed to update course");
    }
  }, [isSuccess, error])

  if(courseByIdLoading) return <h1>Loading...</h1>
  const isPublished = true;
  // const isLoading = false;

  return (
    <Card className="shadow-md">
      <CardHeader className="flex flex-row justify-between items-center">
        <div>
          <CardTitle>Basic Course Information</CardTitle>
          <CardDescription>
            Make changes to your courses here. Click save when you edit your
            course.
          </CardDescription>
        </div>
        <div className="space-x-3">
          <Button variant="outline">
            {isPublished ? "Unpublish" : "Publish"}
          </Button>
          <Button variant="destructive">Remove Course</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6 mt-5">
          {/* Course Title and Course Level */}
          <div className="flex gap-5">
            <div className="flex-1">
              <Label>Course Title</Label>
              <Input
                type="text"
                placeholder="Ex. MERN Stack Developer"
                value={input.courseTitle}
                onChange={changeEventHandler}
                name="courseTitle"
              />
            </div>
            <div className="w-[180px]">
              <Label>Course Level</Label>
              <Select onValueChange={selectCourseLevel}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Course Level</SelectLabel>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Subtitle */}
          <div>
            <Label>Subtitle</Label>
            <Input
              type="text"
              placeholder="Ex. Become a Fullstack Developer in 2 months"
              value={input.subTitle}
              onChange={changeEventHandler}
              name="subTitle"
            />
          </div>

          {/* Description */}
          <div>
            <Label>Description</Label>
            <RichTextEditor input={input} setInput={setInput} />
          </div>

          {/* Category, Thumbnail, and Price in the same line */}
          <div className="flex gap-5 items-start">
            {/* Category */}
            <div className="flex-1">
              <Label>Category</Label>
              <Select onValueChange={selectCategory}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="Android Development">
                      Android Development
                    </SelectItem>
                    <SelectItem value="Angular">Angular</SelectItem>
                    <SelectItem value="API Development">
                      API Development
                    </SelectItem>
                    <SelectItem value="Artificial Intelligence">
                      Artificial Intelligence
                    </SelectItem>
                    <SelectItem value="Augmented Reality">
                      Augmented Reality
                    </SelectItem>
                    <SelectItem value="AWS Cloud">AWS Cloud</SelectItem>
                    <SelectItem value="Big Data">Big Data</SelectItem>
                    <SelectItem value="Blockchain Basics">
                      Blockchain Basics
                    </SelectItem>
                    <SelectItem value="Bootstrap">Bootstrap</SelectItem>
                    <SelectItem value="C Programming">C Programming</SelectItem>
                    <SelectItem value="C#">C#</SelectItem>
                    <SelectItem value="C++">C++</SelectItem>
                    <SelectItem value="Cloud Computing">
                      Cloud Computing
                    </SelectItem>
                    <SelectItem value="Computer Graphics">
                      Computer Graphics
                    </SelectItem>
                    <SelectItem value="Computer Vision">
                      Computer Vision
                    </SelectItem>
                    <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
                    <SelectItem value="Data Analytics">
                      Data Analytics
                    </SelectItem>
                    <SelectItem value="Data Mining">Data Mining</SelectItem>
                    <SelectItem value="Data Science">Data Science</SelectItem>
                    <SelectItem value="Database Systems">
                      Database Systems
                    </SelectItem>
                    <SelectItem value="Deep Learning">Deep Learning</SelectItem>
                    <SelectItem value="Django">Django</SelectItem>
                    <SelectItem value="Docker">Docker</SelectItem>
                    <SelectItem value="Elastic Search">
                      Elastic Search
                    </SelectItem>
                    <SelectItem value="Express.js">Express.js</SelectItem>
                    <SelectItem value="Firebase">Firebase</SelectItem>
                    <SelectItem value="Flutter">Flutter</SelectItem>
                    <SelectItem value="Full Stack Development">
                      Full Stack Development
                    </SelectItem>
                    <SelectItem value="Game Development">
                      Game Development
                    </SelectItem>
                    <SelectItem value="Git & GitHub">Git & GitHub</SelectItem>
                    <SelectItem value="Golang">Golang</SelectItem>
                    <SelectItem value="Graph Theory">Graph Theory</SelectItem>
                    <SelectItem value="GraphQL">GraphQL</SelectItem>
                    <SelectItem value="Hadoop">Hadoop</SelectItem>
                    <SelectItem value="HTML & CSS">HTML & CSS</SelectItem>
                    <SelectItem value="Internet of Things (IoT)">
                      Internet of Things (IoT)
                    </SelectItem>
                    <SelectItem value="Java">Java</SelectItem>
                    <SelectItem value="JavaScript">JavaScript</SelectItem>
                    <SelectItem value="Jenkins">Jenkins</SelectItem>
                    <SelectItem value="Jupyter Notebook">
                      Jupyter Notebook
                    </SelectItem>
                    <SelectItem value="Kotlin">Kotlin</SelectItem>
                    <SelectItem value="Kubernetes">Kubernetes</SelectItem>
                    <SelectItem value="Machine Learning">
                      Machine Learning
                    </SelectItem>
                    <SelectItem value="MERN Stack">MERN Stack</SelectItem>
                    <SelectItem value="Microservices">Microservices</SelectItem>
                    <SelectItem value="Mobile App Development">
                      Mobile App Development
                    </SelectItem>
                    <SelectItem value="MongoDB">MongoDB</SelectItem>
                    <SelectItem value="MySQL">MySQL</SelectItem>
                    <SelectItem value="Next.js">Next.js</SelectItem>
                    <SelectItem value="Node.js">Node.js</SelectItem>
                    <SelectItem value="NumPy">NumPy</SelectItem>
                    <SelectItem value="OpenAI API">OpenAI API</SelectItem>
                    <SelectItem value="Pandas">Pandas</SelectItem>
                    <SelectItem value="PHP">PHP</SelectItem>
                    <SelectItem value="Postman">Postman</SelectItem>
                    <SelectItem value="PostgreSQL">PostgreSQL</SelectItem>
                    <SelectItem value="Python">Python</SelectItem>
                    <SelectItem value="React.js">React.js</SelectItem>
                    <SelectItem value="React Native">React Native</SelectItem>
                    <SelectItem value="Redis">Redis</SelectItem>
                    <SelectItem value="Redux">Redux</SelectItem>
                    <SelectItem value="REST APIs">REST APIs</SelectItem>
                    <SelectItem value="Robotics">Robotics</SelectItem>
                    <SelectItem value="Ruby on Rails">Ruby on Rails</SelectItem>
                    <SelectItem value="Rust">Rust</SelectItem>
                    <SelectItem value="SAP">SAP</SelectItem>
                    <SelectItem value="Scikit-Learn">Scikit-Learn</SelectItem>
                    <SelectItem value="Spring Boot">Spring Boot</SelectItem>
                    <SelectItem value="SQL">SQL</SelectItem>
                    <SelectItem value="Swift">Swift</SelectItem>
                    <SelectItem value="TensorFlow">TensorFlow</SelectItem>
                    <SelectItem value="TypeScript">TypeScript</SelectItem>
                    <SelectItem value="Unity">Unity</SelectItem>
                    <SelectItem value="Unix Shell Scripting">
                      Unix Shell Scripting
                    </SelectItem>
                    <SelectItem value="User Interface Design">
                      User Interface Design
                    </SelectItem>
                    <SelectItem value="Virtual Reality">
                      Virtual Reality
                    </SelectItem>
                    <SelectItem value="Vue.js">Vue.js</SelectItem>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Price */}
            <div className="w-[180px]">
              <Label>Price (INR)</Label>
              <Input
                type="number"
                name="coursePrice"
                onChange={changeEventHandler}
                placeholder="199"
              />
            </div>

            {/* Course Thumbnail */}
            <div className="flex-1">
              <Label>Course Thumbnail</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={selectThumbnail}
                className="w-full"
              />
              {previewThumbnail && (
                <img src={previewThumbnail} className="e-64 my-2" alt="Course Thumbnail h-1" />

              )}
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <Label>Additional Information</Label>
            <textarea
              name="additionalInfo"
              value={input.additionalInfo}
              onChange={changeEventHandler}
              rows={4}
              placeholder="Provide any additional information here."
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Save/Cancel Buttons */}
          <div className="flex justify-end gap-4">
            <Button variant="outline" onClick={() => navigate("/admin/course")}>
              Cancel
            </Button>

            <Button disabled={isLoading} onClick={updateCourseHandler}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> please Wait
                </>
              ) : (
                "Save"
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseTab;
