import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

const MessageForm = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [results, setResults] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setResults("Sending...");

    const formData = new FormData(e.target);

    formData.append("access_key", "3b3810fc-9f7a-4e99-bf38-9be49be6f091");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
      subject: "New message from my portfoliio website ",
    });

    const data = await response.json();

    if (data.success) {
      setResults("Form submitted successfully");
      e.target.reset();
      enqueueSnackbar("Message sent successfully", {variant: 'success'})
    } else {
      setResults(data.message);
      enqueueSnackbar("Error sending message", {variant: 'error'})
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="w-full flex flex-col">
      <SnackbarProvider />

      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full justify-center items-center flex">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 p-10 md:p-0 xl:p-0 2xl:p-0 "
          >
            <div className="flex justify-center items-center w-full">
              <h2 className="w-full text-white text-start text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl font-bold px-3 border-l-2 border-red-600">
                Leave a message
              </h2>
            </div>
            <div className="flex flex-col text-white">
              <label htmlFor="fullname">Full Name</label>
              <input
                name="fullName"
                className=" bg-transparent text-white rounded-md border-[1px] border-slate-400 py-3 px-2"
              />
            </div>
            <div className="flex flex-col text-white">
              <label htmlFor="email">Email Address</label>
              <input
                name="email"
                className=" bg-transparent text-white rounded-md border-[1px] border-slate-400 py-3 px-2"
                autoFocus={false}
              />
            </div>
            <div className="flex flex-col text-white">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="5"
                className="rounded-md bg-transparent text-white border-slate-400"
              ></textarea>
            </div>
            <button
              aria-describedby={id}
              variant="contained"
              className="bg-red-600 text-white py-2 rounded-md hover:bg-red-700 duration-75 ease-in"
            >
              Send
            </button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography sx={{ p: 2 }}>{results}</Typography>
            </Popover>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
