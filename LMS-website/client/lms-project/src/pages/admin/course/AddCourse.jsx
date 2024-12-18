import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {useCreateCourseMutation} from "@/features/api/courseApi";
import {Loader2} from "lucide-react";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "sonner";

const AddCourse = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [category, setCategory] = useState("");
  const [createCourse, {data, isLoading, error, isSuccess}] =
    useCreateCourseMutation();

  const navigate = useNavigate();

  const getSelectedCategory = (value) => {
    setCategory(value);
  };

  const createCourseHandler = async () => {
    await createCourse({
      courseTitle,
      category,
    });
  };

  // for displaying mess (toast)
  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message || "Course created successfully");
      navigate("/admin/course")
    }
  }, [isSuccess, error, data?.message]);

  return (
    <div className="flex-1 mt-20">
      <div className="mb-4">
        <h1 className="font-bold text-xl">
          Lets add course, add some basic course details for your new course
        </h1>
        <p className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          laborum!
        </p>
      </div>
      <div className="space-y-4">
        <div>
          <Label>Title</Label>
          <Input
            type="text"
            name="courseTitle"
            placeholder="Enter course title"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
          ></Input>
        </div>
        <div>
          <Label>Category</Label>
          <Select onValueChange={getSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="Android Development">
                  Android Development
                </SelectItem>
                <SelectItem value="Angular">Angular</SelectItem>
                <SelectItem value="API Development">API Development</SelectItem>
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
                <SelectItem value="Cloud Computing">Cloud Computing</SelectItem>
                <SelectItem value="Computer Graphics">
                  Computer Graphics
                </SelectItem>
                <SelectItem value="Computer Vision">Computer Vision</SelectItem>
                <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
                <SelectItem value="Data Analytics">Data Analytics</SelectItem>
                <SelectItem value="Data Mining">Data Mining</SelectItem>
                <SelectItem value="Data Science">Data Science</SelectItem>
                <SelectItem value="Database Systems">
                  Database Systems
                </SelectItem>
                <SelectItem value="Deep Learning">Deep Learning</SelectItem>
                <SelectItem value="Django">Django</SelectItem>
                <SelectItem value="Docker">Docker</SelectItem>
                <SelectItem value="Elastic Search">Elastic Search</SelectItem>
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
                <SelectItem value="Virtual Reality">Virtual Reality</SelectItem>
                <SelectItem value="Vue.js">Vue.js</SelectItem>
                <SelectItem value="Web3">Web3</SelectItem>
                <SelectItem value="Web Development Basics">
                  Web Development Basics
                </SelectItem>
                <SelectItem value="Webpack">Webpack</SelectItem>
                <SelectItem value="WordPress">WordPress</SelectItem>
                <SelectItem value="XML & JSON">XML & JSON</SelectItem>
                <SelectItem value="YAML">YAML</SelectItem>
                <SelectItem value="YouTube API">YouTube API</SelectItem>
                <SelectItem value="Zend Framework">Zend Framework</SelectItem>
                <SelectItem value="Zookeeper">Zookeeper</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" onClick={() => navigate("/admin/course")}>
            Back
          </Button>
          <Button disabled={isLoading} onClick={createCourseHandler}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please Wait...
              </>
            ) : (
              "Create"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
