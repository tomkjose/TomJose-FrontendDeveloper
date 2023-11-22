import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Chip,
} from "@material-tailwind/react";
import React from "react";
import { CapsulePopup } from "./CapsulePopup";
import "../styles/styles.css";

export function CapsuleCard({ capsule }) {
  return (
    <Card className=" w-1/3 m-4 container">
      <CardHeader
        color="white"
        className="relative  flex justify-center items-center "
      >
        <img src="capsule.jpg" alt="capsule" />
      </CardHeader>
      <CardBody>
        <div className="flex flex-warp justify-between pb-4">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {capsule?.missions[0]?.name || "Unknown"}
          </Typography>
          <Chip
            variant="ghost"
            color={
              capsule.status === "retired"
                ? "red"
                : capsule.status === "active"
                ? "green"
                : "gray"
            }
            size="sm"
            value={capsule.status}
            icon={
              <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />
            }
          />
        </div>
        <Typography>{capsule.details}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <CapsulePopup capsule={capsule} />
      </CardFooter>
    </Card>
  );
}
