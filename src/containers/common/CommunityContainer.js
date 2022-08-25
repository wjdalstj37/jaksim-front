import { useSelector } from "react-redux";
import CommunityForm from "../../components/community/CommunityForm";

const CommunityContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));

  return <CommunityForm user={user} />;
};

export default CommunityContainer;
