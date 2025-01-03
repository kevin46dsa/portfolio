import SocialLink from "../SocialLinks/SocialLinks";

export const ContactSocialIcons = () => {
  return (
    <div className="social-icons">
      <SocialLink variant="Github" />
      {"      "}
      <div className="vr" />
      {"      "}
      <SocialLink variant="LinkedIn" />

      {"      "}
      <div className="vr" />
      {"      "}
      <SocialLink variant="buymecoffee" />
      {"      "}
      <div className="vr" />
      {"      "}
      <SocialLink variant="Soundcloud" />
      {"      "}
      <div className="vr" />
      {"      "}
      <SocialLink variant="Youtube" />
      {"      "}
    </div>
  );
};
