import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";

export function CapsuleCard({ capsule }) {
  return (
    <Card className="  w-1/4 m-4 ">
      <CardHeader
        color="white"
        className="relative  flex justify-center items-center "
      >
        <img
          src="https://images2.imgbox.com/0b/33/2eLGEejP_o.png"
          alt="capsule"
        />
      </CardHeader>
      <CardBody>
        <div className="flex justify-between pb-4">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {capsule.mission_name}
          </Typography>
          <Chip
            variant="ghost"
            color="green"
            size="sm"
            value="active"
            icon={
              <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />
            }
          />
        </div>
        <Typography>{capsule.details}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}
