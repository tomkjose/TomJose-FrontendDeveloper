import React, { useEffect } from "react";
import { CapsuleContainer } from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchCapsule } from "../redux/action";
import { Loading } from "../components/Loading";
import { useAuth } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
function Home() {
  const { capsules, loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { user } = useAuth();

  useEffect(() => {
    dispatch(fetchCapsule());
  }, [dispatch, user]);

  const navigate = useNavigate();
  if (!user) {
    navigate("/signup");
  }
  if (loading) {
    return (
      <div className="flex flex-wrap justify-center p-8">
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <CapsuleContainer capsules={capsules} />
    </div>
  );
}

export default Home;
