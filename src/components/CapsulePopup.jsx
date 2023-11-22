import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

Typography.propTypes = {
  someProp: PropTypes.string,
};

export function CapsulePopup({ capsule }) {
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
                Status : {capsule.status}
              </Typography>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Type : {capsule.type}
              </Typography>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Year : {new Date(capsule.original_launch).getFullYear()}
              </Typography>
            </DialogBody>
          </div>
        </div>
      </Dialog>
    </>
  );
}
