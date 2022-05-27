// Briefing modal

import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  FormLabel,
  FormControl,
  HStack,
  Textarea,
  RadioGroup,
  Radio,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { Cube, Money, Add } from "@styled-icons/fluentui-system-filled";
import { useRef } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import FormikTextInput from "../Control/Formik/FormikTextInput";
import FormikUrlInput from "../Control/Formik/FormikUrlInput";
import FormikNumberInput from "../Control/Formik/FormikNumberInput";
import { isString } from "lodash";
import Router from "next/router";
import { type } from "os";

// Unused, as we are parsing the wesite value to add https:// and using Yups url validation now
const urlRegex =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;

// We are hardcoding the imageUrl until we know how to manage images in dbs
const tempImage: string =
  "https://images.unsplash.com/photo-1652538302725-0ee98032dcad";

// Initial form values
const newProductFormInitValues = {
  productType: "Physical",
  productName: "",
  productValue: 0.0,
  productUrl: "",
  productDescription: "",
};

// Yup validation object
const yupValidationObject = Yup.object({
  productType: Yup.string()
    .oneOf(["Physical", "Digital"], "Invalid product type")
    .required("Required"),
  productName: Yup.string()
    .max(30, "Keep the name short. No need to include brand name")
    .required("Required"),
  productValue: Yup.number()
    .transform(parseValue)
    .min(0.01, "Invalid product value")
    .required("Required"),
  productUrl: Yup.string()
    .transform(parseUrl)
    .url("Invalid url")
    .required("Required"),
  productDescription: Yup.string().optional(),
});

const submitData = async (body: {
  type: string;
  name: string;
  description: string;
  productPageUrl: string;
  value: number;
  tempImage: string;
}) => {
  try {
    await fetch("/api/product/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    await Router.push("/products/confirmation");
  } catch (error) {
    console.error(error);
  }
};

const NewProductModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  return (
    <>
      <Button
        colorScheme="purple"
        onClick={onOpen}
        leftIcon={<Add size="1rem" />}
      >
        New Product
      </Button>

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay background="purple.600" />
        <ModalContent borderWidth={4} minWidth="640px" borderColor="purple.900">
          <Formik
            initialValues={newProductFormInitValues}
            validationSchema={yupValidationObject}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                const data = {
                  type: values.productType,
                  name: values.productName,
                  description: values.productDescription,
                  productPageUrl: `https://` + values.productUrl,
                  value: Number(values.productValue),
                  tempImage: tempImage,
                };
                console.log(data);
                submitData(data);
                setSubmitting(false);
                resetForm();
              }, 1000);
            }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <ModalHeader p={4} backgroundColor="gray.50" alignContent="end">
                  Add New Product 🙌
                  <ModalCloseButton top="12px" />
                </ModalHeader>
                <Divider borderColor="gray.300" />
                <ModalBody p={4}>
                  <FormLabel htmlFor="productType">Product type*</FormLabel>
                  <RadioGroup
                    id="productType"
                    defaultValue="Physical"
                    colorScheme="purple"
                    mb={4}
                  >
                    <Stack spacing={4} direction="row">
                      <Radio
                        ref={initialRef}
                        name="productType"
                        value="Physical"
                        checked={formik.values.productType === "Physical"}
                        onChange={() =>
                          formik.setFieldValue("productType", "Physical")
                        }
                      >
                        Physical
                      </Radio>
                      <Radio
                        name="productType"
                        value="Digital"
                        checked={formik.values.productType === "Digital"}
                        onChange={() =>
                          formik.setFieldValue("productType", "Digital")
                        }
                      >
                        Digital
                      </Radio>
                    </Stack>
                  </RadioGroup>
                  <HStack gap={1}>
                    <FormikTextInput
                      id="productName"
                      name="productName"
                      placeholder="Product name"
                      label="Product name*"
                      helpText="Choose a short name and avoid your brand name."
                      icon={Cube}
                      value={formik.values.productName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <FormikNumberInput
                      id="productValue"
                      name="productValue"
                      label="Product value (€)*"
                      helpText={` `}
                      icon={Money}
                      onChange={(e: string) => {
                        const format = e + ` €`;
                        formik.setFieldValue("productValue", e);
                      }}
                      onBlur={formik.handleBlur}
                      value={formik.values.productValue}
                    />
                  </HStack>
                  <FormikUrlInput
                    id="productUrl"
                    name="productUrl"
                    placeholder="Product page url"
                    label="Product page*"
                    value={formik.values.productUrl}
                    onChange={(e) => {
                      const stripValue = e.target.value
                        .replace("https://", "")
                        .replace("http://", "");
                      formik.setFieldValue("productUrl", stripValue);
                    }}
                    onBlur={formik.handleBlur}
                  />
                  <FormControl>
                    <FormLabel htmlFor="productDescription" mb={1}>
                      Product description
                    </FormLabel>
                    <Textarea
                      id="productDescription"
                      name="productDescription"
                      placeholder="Write a short description creators can understand"
                      resize="none"
                      focusBorderColor="purple.900"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.productDescription}
                    />
                  </FormControl>
                </ModalBody>
                <Divider borderColor="gray.300" />
                <ModalFooter backgroundColor="gray.50" p={4}>
                  <Button variant="ghost" mr={4} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    isLoading={formik.isSubmitting}
                    variant="solid"
                    colorScheme="purple"
                  >
                    Create product
                  </Button>
                </ModalFooter>
              </form>
            )}
          </Formik>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewProductModal;

function parseUrl(currentValue: string, originalValue: string): string {
  const parsedUrl = isString(currentValue)
    ? `https://` + currentValue
    : "ERROR";

  return parsedUrl;
}

function parseValue(currentValue: number, originalValue: string) {
  if (isString(originalValue)) {
    const index = originalValue.indexOf(".");
    const dotlessString =
      originalValue.substring(0, index + 1) +
      originalValue.substring(index + 1).replaceAll(".", "");
    const parsedValue = Number(dotlessString.replace(/[^\d.-]/g, ""));
    return parsedValue;
  } else {
    return 0.0;
  }
}
