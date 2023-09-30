import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

export function CapsulePopup({ capsule }) {
  console.log("capsule", capsule);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        ReadMore
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>{capsule.missions[0]?.name}</DialogHeader>
        <div className="flex flex-col	">
          <div>
            <img className="w-full pb-4" src="capsule.jpg" alt="capcule" />
            <DialogBody divider>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Details : {capsule.details}
              </Typography>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                status : {capsule.status}
              </Typography>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                type : {capsule.type}
              </Typography>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                type : {new Date(capsule.original_launch).getFullYear()}
              </Typography>
            </DialogBody>
          </div>
        </div>
        <DialogFooter></DialogFooter>
      </Dialog>
    </>
  );
}
