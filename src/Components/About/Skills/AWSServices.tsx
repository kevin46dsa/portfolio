import {
  SiAwslambda,
  SiAmazonaws,
  SiAmazondynamodb,
  SiAwsamplify,
  SiAmazonec2,
  SiAmazonapigateway,
} from "react-icons/si";
import SkillIconElements from "./SkillIconElements";

const tools = [
  { name: "AWS Lambda", icon: <SiAwslambda size={40} /> },
  { name: "AWS DynamoDB", icon: <SiAmazondynamodb size={40} /> },
  { name: "AWS Step Functions", icon: <SiAmazonaws size={40} /> },
  { name: "AWS Amplify", icon: <SiAwsamplify size={40} /> },
  { name: "AWS EC2", icon: <SiAmazonec2 size={40} /> },
  { name: "AWS RDS", icon: <SiAmazonaws size={40} /> },
  { name: "AWS CloudFront", icon: <SiAmazonaws size={40} /> },
  { name: "AWS API Gateway", icon: <SiAmazonapigateway size={40} /> },
];

export function AWSServices() {
  return (
    <div className="about-techstack-section">
      <h3 className="project-heading">
        <strong className="purple">AWS </strong>Services
      </h3>
      <SkillIconElements elements={tools} />
    </div>
  );
}
