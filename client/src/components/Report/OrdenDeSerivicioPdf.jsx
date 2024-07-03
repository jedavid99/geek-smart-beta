import React, { Fragment, useEffect, useState } from "react";
import {
  Image,
  Text,
  View,
  Page,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import Logo from "../../assets/img/geek-smart-PDF.png";
import Axios from "axios";
import { API_URL } from "../../host";
import { LoadingOutlined, PrinterFilled } from "@ant-design/icons";
import { Button, Spin } from "antd";
import { useMediaQuery } from "@mui/material";

export const PdfOrden = () => {
  const [recieptData, setRecieptData] = useState({}); // Initialize an empty object to store the fetched data
  const codigo = parseInt(
    new URLSearchParams(window.location.search).get("codigo"),
    10
  );

  useEffect(() => {
    const fetchRecieptData = async () => {
      try {
        const response = await Axios.get(`${API_URL}/producto/${codigo}`);
        if (response.status === 200) {
          const data = response.data; // Assuming the response data is in the format you need
          setRecieptData(data);
        } else {
          console.log("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (codigo) {
      fetchRecieptData();
    }
  }, [codigo]); // Add codigo as a dependency

  useEffect(() => {
    console.log("Component updated at:", new Date().toLocaleString());
  }, [recieptData]); // Log the current date whenever recieptData changes
  // Update the reciept_data object using the fetched data

  const reciept_data = {
    codigo: recieptData.codigo,
    nombre: recieptData.nombre,
    descripcion: recieptData.descripcion,
    telefono_Cliente: recieptData.telefono_Cliente,
    DNI: recieptData.DNI,
    fecha_registro: recieptData.fecha_registro,
    fecha_registro: recieptData.fecha_registro,
    servicio: recieptData.servicio,
    estatus: recieptData.estatus,
    precio: recieptData.precio,
    // Add more properties as needed
  };

  const isMobile = useMediaQuery("(max-width: 600px)");

  const [allData, setAllData] = useState({}); // Initialize an empty object to store the fetched data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(`${API_URL}/empresa_lista`);
        if (response.status === 200) {
          const data = response.data; // Assuming the response data is in the format you need
          setAllData(data);
        } else {
          console.log("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []); // Run the effect only once

  useEffect(() => {
    console.log("Component updated at:", new Date().toLocaleString());
  }, [allData]); // Log the current date whenever allData changes

  const empresaList =
    allData && allData.length > 0
      ? {
          empresas: allData.map((empresa) => ({
            id: empresa.id,
            nombreDeEmpresa: empresa.nombre_de_empresa,
            cuitCuil: empresa.CUIT_CUIL,
            direccion: empresa.Dirección,
            servicioDeLaEmpresa: empresa.servicio_de_la_empresa,
            dueñoDeLaEmpresa: empresa.dueño_de_la_empresa,
            telefonoDeLaEmpresa: empresa.telefono_de_la_empresa,
          })),
        }
      : {};

  const styles = StyleSheet.create({
    page: {
      fontSize: 2,
      paddingTop: 2,
      paddingLeft: 20,
      paddingRight: 20,
      lineHeight: 1.5,
      flexDirection: "column",
    },

    spaceBetween: {
      flex: 2,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      color: "#3E3E3E",
    },

    spaceDatos: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      color: "#3E3E3E",
      marginTop: 15,
    },

    titleContainer: { flexDirection: "row", marginTop: 1 },

    Logo: {
      width: 100,
      height: 100,
      lexDirection: "row",
      marginTop: 1,
      marginLeft: 3,
    },

    DatosClientes: { fontWeight: 400, fontSize: 10 },

    addressTitle: { fontSize: 10, fontStyle: "bold" },

    invoice: { fontSize: 20 },

    fecha: { fontSize: 13 },

    theader: {
      marginTop: 20,
      fontSize: 9,
      fontStyle: "bold",
      paddingTop: 4,
      paddingLeft: 7,
      flex: 1,
      height: 20,
      backgroundColor: "#DEDEDE",
      borderColor: "black",
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderRight: "black",
    },

    theader2: { flex: 2 },

    tbody: {
      fontSize: 9,
      paddingTop: 4,
      height: 50,
      paddingLeft: 7,
      flex: 1,
      borderColor: "black",
      borderRightWidth: 1,
      borderBottomWidth: 1,
      textAlign: "center",
    },

    total: {
      fontSize: 20,
      paddingTop: 9,
      paddingLeft: 200,
      flex: 2.3,
      borderColor: "black",
      borderWidth: 1,
    },
    recorte: {
      fontSize: 6,
      paddingTop: 1,
      paddingLeft: 7,
      flex: 1.5,
      borderColor: "black",
      borderWidth: 2,
      borderStyle: "dashed",
      marginTop: 10,
    },
    tbody2: { flex: 2, borderWidth: 1 },

    Footer: {
      fontSize: 6,
      fontWeight: 10,
      marginTop: 10,
      textAlign: "justificado",
    },
    watermark: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "130%",
      opacity: 0.05,
      zIndex: -7,
    },
    fondo: {
      position: "absolute",
      top: 0,
      left: 65,
      width: "60%",
      height: "60%",
      opacity: 0.05,
      zIndex: -1,
    },
  });

  const InvoiceTitle = () => (
    <View style={styles.titleContainer}>
      <View style={styles.spaceBetween}>
        <Image style={styles.Logo} src={Logo} />
        <Text style={styles.fecha}>{reciept_data.fecha_registro}</Text>
        <Text style={styles.invoice}>Nº {reciept_data.codigo} </Text>
      </View>
    </View>
  );

  const Address = () => (
    <View style={styles.titleContainer}>
      {empresaList.empresas && empresaList.empresas.length > 0 ? (
        empresaList.empresas.map((empresa, index) => (
          <View style={styles.spaceBetween}>
            <View></View>
            <View>
              <Text style={styles.addressTitle}> {empresa.direccion}</Text>
              <View style={{ width: "100%", flexDirection: "row" }}>
                <Text style={styles.addressTitle}>CUT/CUIL :</Text>
                <Text style={styles.addressTitle}>{empresa.cuitCuil}</Text>
              </View>
              <View style={{ width: "100%", flexDirection: "row" }}>
                <Text style={styles.addressTitle}>telefono :</Text>
                <Text style={styles.addressTitle}>
                  {empresa.telefonoDeLaEmpresa}
                </Text>
              </View>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.noData}>No hay datos disponibles</Text>
      )}
    </View>
  );

  const DatosClient = () => (
    <View style={{ width: "100%" }}>
      <View style={styles.spaceDatos}>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <Text style={styles.addressTitle}>Cliente :</Text>
          <Text style={styles.addressTitle}>{reciept_data.nombre}</Text>
        </View>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <Text style={styles.addressTitle}>telefono :</Text>
          <Text style={styles.addressTitle}>
            {reciept_data.telefono_Cliente}
          </Text>
        </View>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <Text style={styles.addressTitle}>DNI :</Text>
          <Text style={styles.addressTitle}>{reciept_data.DNI}</Text>
        </View>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <Text style={styles.addressTitle}>Firma:</Text>
          <Text style={styles.addressTitle}>________________</Text>
        </View>
      </View>
    </View>
  );

  const TableHead = () => (
    <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
      <View style={[styles.theader, styles.theader2]}>
        <Text>Descripcion</Text>
      </View>
      <View style={styles.theader}>
        <Text>Servicio</Text>
      </View>
      <View style={styles.theader}>
        <Text>Estado</Text>
      </View>
      <View style={styles.theader}>
        <Text>precio</Text>
      </View>
    </View>
  );

  const TableBody = () => (
    <Fragment>
      <View style={{ width: "100%", flexDirection: "row" }}>
        <View style={[styles.tbody, styles.tbody2]}>
          <Text> {reciept_data.descripcion}</Text>
        </View>
        <View style={styles.tbody}>
          <Text> {reciept_data.servicio}</Text>
        </View>
        <View style={styles.tbody}>
          <Text>{reciept_data.estatus}</Text>
        </View>
        <View style={styles.tbody}>
          <Text> {reciept_data.precio}</Text>
        </View>
      </View>
    </Fragment>
  );

  const TableTotal = () => (
    <View style={{ width: "100%", flexDirection: "row" }}>
      <View style={styles.total}>
        <Text>Total</Text>
      </View>
      <View style={styles.tbody}>
        <Text>{reciept_data.precio}</Text>
      </View>
    </View>
  );

  const Footer = () => (
    <View style={styles.Footer}>
      <Text>
        En caso de que la reparación realizada presente un nuevo defecto dentro
        del plazo de 30 dias , geeksmart se compromete a revisar el equipo sin
        costo adicional. • Si una pieza instalada durante la reparación falla
        dentro del periodo de 30 dias, geeksmart se compromete a reemplazarla
        sin costo adicional para el cliente, siempre y cuando el fallo no sea
        causado por un mal uso del dispositivo. la garantía no cubre: * Daños
        causados por el mal uso del dispositivo, negligencia, accidentes o
        fenómenos naturales. * Reparaciones o modificaciones realizadas por
        terceros no autorizados. Para hacer valer la garantía: * El cliente
        deberá presentar el comprobante de la reparación o mantenimiento
        realizada por Geek Smart. * El cliente deberá describir el problema que
        presenta el dispositivo. geek smart se compromete a ofrecer un servicio
        técnico de alta calidad y a brindar la mejor atención al cliente.
      </Text>
    </View>
  );

  const OrdePDF = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Image src={Logo} style={styles.watermark} />
          <InvoiceTitle />
          <Address />
          <DatosClient />
          <TableHead />
          <TableBody />
          <TableTotal />

          <Footer />
          <Text style={styles.recorte}></Text>
        </View>
        <View style={styles.section}>
          <Image src={Logo} style={styles.watermark} />
          <InvoiceTitle />
          <Address />
          <DatosClient />

          <TableHead />
          <TableBody />
          <TableTotal />
          <Footer />
        </View>
      </Page>
    </Document>
  );

  return (
    <div>
      {isMobile ? (
        <PDFDownloadLink
          document={<OrdePDF />}
          fileName={`orden-de-servicio-${reciept_data.codigo}.pdf`}
        >
          {({ loading }) => (
            <div className="flex justify-center mt-[73%] w">
              <img
                src={Logo}
                className="flex justify-center mt-[20%] w"
                style={styles.fondo}
              />
              {loading ? (
                <Spin
                  indicator={
                    <LoadingOutlined
                      style={{
                        fontSize: 60,
                      }}
                      spin
                    />
                  }
                />
              ) : (
                <Button type="primary" className="" icon={<PrinterFilled />}>
                  Descargar
                </Button>
              )}
            </div>
          )}
        </PDFDownloadLink>
      ) : (
        <PDFViewer style={{ width: "100%", height: "100vh" }}>
          <OrdePDF />
        </PDFViewer>
      )}
    </div>
  );
};
