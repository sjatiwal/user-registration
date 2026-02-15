import { TextField, Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { userFields } from "../config/userFields";
import { useEffect } from "react";

export default function UserForm({ onSubmit, defaultValues }: any) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);
  const handleFormSubmit = (data: any) => {
    onSubmit(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Stack spacing={2}>
        {userFields.map((field) => (
          <>
            <div>{field.label}</div>
            <TextField
              key={field.name}
              type={field.type || "text"}
              slotProps={{
                htmlInput: {
                  maxLength: field.maxLength,
                  inputMode: field.type === "tel" ? "numeric" : undefined,
                  onInput:
                    field.type === "tel"
                      ? (e: any) => {
                          e.currentTarget.value = e.currentTarget.value.replace(
                            /\D/g,
                            "",
                          );
                        }
                      : undefined,
                },
              }}
              {...register(field.name, {
                required: field.required && `${field.label} is required`,

                minLength:
                  field.type === "tel"
                    ? {
                        value: 10,
                        message: "Phone number must be 10 digits",
                      }
                    : undefined,

                maxLength: field.maxLength
                  ? {
                      value: field.maxLength,
                      message: `Max ${field.maxLength} characters`,
                    }
                  : undefined,

                pattern:
                  field.type === "email"
                    ? {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      }
                    : field.type === "tel"
                      ? {
                          value: /^[0-9]+$/,
                          message: "Only numbers allowed",
                        }
                      : undefined,
              })}
              error={!!errors[field.name]}
              helperText={
                errors[field.name] && (errors[field.name]?.message as string)
              }
            />
          </>
        ))}

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Stack>
    </form>
  );
}
