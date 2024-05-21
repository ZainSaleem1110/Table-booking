import React, { useState, useEffect } from "react";
import Image from "next/image";
import { styled } from "@mui/styles";
import {
  Checkbox,
  Typography,
  Box,
} from "@mui/material";

interface PropsCheckbox {
  theme: any;
  colorChecked?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

const StyledCheckbox = styled(Checkbox)(
  ({ theme, colorChecked }: PropsCheckbox) => {
    return {
      color: "#999999",
      padding: "0",
      "&.Mui-checked": {
        color: colorChecked || theme.palette.secondary.main,
      },
    };
  }
);

export default function MultiSelect({
  title,
  categories,
  onChange,
  clearData,
}: {
  title: string;
  categories: any;
  onChange: Function;
  clearData?: any;
}) {
  const [isShowDropDown, setIsShowDropDown] = useState(false);
  const [opt, setOpt] = useState<any[]>([]);
  const [optSelected, setOptSelected] = useState<any[]>([]);

  useEffect(() => {
    let empty: any = [];
    const selected = optSelected?.map((opt) => opt);
    if (optSelected?.length) {
      onChange(selected);
    } else {
      onChange(empty);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optSelected]);

  useEffect(() => {
    const newArray = categories?.map((name: any, index: any) => ({
      name: name?.name,
      checked: false,
      id: name?.id,
    }));
    setOpt(newArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  useEffect(() => {
    if (clearData == true) {
      setOptSelected([]);
      const newArray = categories?.map((name: any, index: any) => ({
        name: name?.name,
        checked: false,
        id: name?.id,
      }));
      setOpt(newArray);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clearData]);

  const FetchData = (opt: any, optSelected: any) => {
    opt?.filter((original: any) => {
      return optSelected?.some((selected: any) => {
        if (original?.name === selected?.opt && original?.checked == false) {
          original.checked = true;
        }
      });
    });
  };

  useEffect(() => {
    FetchData(opt, optSelected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optSelected, opt]);

  const handleChange = (e: any) => {
    const name = e.target.name;
    const optChecked = e.target.checked;

    const newArray = opt?.map((opts: any) =>
      name === opts?.name ? { ...opts, checked: optChecked } : opts
    );
    setOpt(newArray);
    if (optChecked) {
      setOptSelected([...optSelected, { opt: name, checked: optChecked }]);
    } else {
      const arr = optSelected
        .map((opt) =>
          name === opt?.opt ? { ...opt, checked: optChecked } : opt
        )
        .filter((opt) => opt.checked && opt);
      setOptSelected(arr);
    }
  };

  return (
    <Box
      width="100%"
      borderBottom="1px solid #DBDBDB"
      sx={{
        "&: last-child": {
          borderBottom: "none",
        },
      }}
    >
      <Box
        className="pointer"
        onClick={() => setIsShowDropDown(!isShowDropDown)}
        height="40px"
        display="flex"
        alignItems="center"
      >
        <Box mr="5px">
          <Image
            src={
              isShowDropDown
                ? "/Images/icons/triangle-bottom-icon.svg"
                : "/Images/icons/triangle-right-primary-icon.svg"
            }
            width={20}
            height={20}
            layout="fixed"
            alt=""
          />
        </Box>
        <Box>
          <Typography>{title}</Typography>
        </Box>
      </Box>
      {isShowDropDown && (
        <Box pt="10px" pb="13px">
          {opt?.map(({ name, checked }: any, index: any) => {
            return (
              <Box pl="15px" mb="10px" key={index}>
                <Box display="flex" alignItems="center">
                  <Box mr="7px">
                    <StyledCheckbox
                      colorChecked="#F9B500"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      name={name}
                      checked={checked}
                    />
                  </Box>
                  <Box>
                    <Typography variant="body1" color="grey.500">
                      {name}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
}
