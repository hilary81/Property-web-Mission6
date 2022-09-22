import React from "react";
import "./SectionTwo.css";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}

const SectionTwo = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState([20, 37]);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    zIndex: 1,
    p: 1,
    bgcolor: "#F3F3F3",
    width: "168px",
    borderRadius: "3px",
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="SectionTwoHome">
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search by location"
          className="searchInputFieldHome"
        />
        <button className="searchBtnHome" type="submit"><a className="btnLinkSearchSec" href="/curentlisting">
          BROWSE PROPERTIES
        </a></button>
      </div>
      <div className="filterButtonsStack">
        <Stack direction="row" spacing={6}>
          {/* Filter Button Property Type */}
          <ClickAwayListener onClickAway={handleClickAway}>
            <Box sx={{ position: "relative", marginLeft: "140px" }}>
              <button
                type="button"
                onClick={handleClick}
                className="btnFilterParent"
              >
                Property Type
                <img
                  src="https://i.postimg.cc/qML1pcz8/Vector-13.png"
                  alt="plus"
                  className="plusIcon"
                />
              </button>
              {open ? (
                <Box sx={styles} className="dropDownBoxOptions arrow-top">
                  <Stack spacing={1}>
                    <h1 className="drpdwnTitle">Property Type</h1>
                    <Stack spacing={-1.8}>
                      <button className="drpdwnbtnOptionFilter">
                        Apartment
                      </button>
                      <br />
                      <button className="drpdwnbtnOptionFilter">House</button>
                      <br />
                      <button className="drpdwnbtnOptionFilter">
                        Townhouse
                      </button>
                      <br />
                      <button className="drpdwnbtnOptionFilter">Studio</button>
                      <br />
                      <button className="drpdwnbtnOptionFilter">Unit</button>
                      <br />
                    </Stack>
                    <div className="ApplyBtnStack">
                      <button className="applyBtn">Apply</button>
                    </div>
                  </Stack>
                </Box>
              ) : null}
            </Box>
          </ClickAwayListener>
          {/* Filter Button Bed & Bath */}
          <button type="button" className="btnFilterParentNotFunctional">
            Bed & Bath
            <img
              src="https://i.postimg.cc/qML1pcz8/Vector-13.png"
              alt="plus"
              className="plusIcon1"
            />
          </button>
          <button type="button" className="btnFilterParentNotFunctional2">
            Carparks
            <img
              src="https://i.postimg.cc/qML1pcz8/Vector-13.png"
              alt="plus"
              className="plusIcon2"
            />
          </button>
          <button type="button" className="btnFilterParentNotFunctional3">
            More
            <img
              src="https://i.postimg.cc/qML1pcz8/Vector-13.png"
              alt="plus"
              className="plusIcon3"
            />
          </button>
          {/* Slider bar */}
          <Box sx={{ width: 408, position: "absolute", left: "850px" }}>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={25}
              max={5000}

              sx={{color: "red"}}
            />
            <p className="sliderTitle">Rent per week</p>
          </Box>
        </Stack>
      </div>
    </div>
  );
};

export default SectionTwo;
