import React, { Fragment, useEffect, useState } from "react";
import {
  Image,
  Text,
  View,
  Page,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import Logo from "../../assets/img/geek-smart-PDF.png";
import Axios from "axios";
import { API_URL } from "../../host";

export const EquiposReparadosPDF = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(`${API_URL}/empresa_lista`);
        const ReparadosResponse = await Axios.get(`${API_URL}/Servicio`);

        if (response.status === 200 && ReparadosResponse.status === 200) {
          const empresaData = response.data;
          const ReparadosData = ReparadosResponse.data;
          setData({ empresaData, ReparadosData });
        } else {
          console.log("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const empresaList =
    data.empresaData && data.empresaData.length > 0
      ? data.empresaData.map((empresa) => ({
          id: empresa.id,
          nombreDeEmpresa: empresa.nombre_de_empresa,
          cuitCuil: empresa.CUIT_CUIL,
          direccion: empresa.Dirección,
          servicioDeLaEmpresa: empresa.servicio_de_la_empresa,
          dueñoDeLaEmpresa: empresa.dueño_de_la_empresa,
          telefonoDeLaEmpresa: empresa.telefono_de_la_empresa,
        }))
      : {};

  const ReparadosList =
    data.ReparadosData && data.ReparadosData.length > 0
      ? data.ReparadosData.filter(
          (Reparados) => Reparados.estatus === "Reparado"
        ).map((Reparados) => ({
          id: Reparados.id,
          codigo: Reparados.codigo,
          nombre: Reparados.nombre,
          categoria: Reparados.categoria,
          servicio: Reparados.servicio,
          precio: Reparados.precio,
          dispositivo: Reparados.dispositivo,
          DNI: Reparados.DNI,
          telefono_Cliente: Reparados.telefono_Cliente,
          estatus: Reparados.estatus,
          EMEI: Reparados.emei_codigo,
          fechaIngreso: Reparados.fecha_registro,
        }))
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
      marginTop: 3,
      marginLeft: 9,
    },

    DatosClientes: { fontWeight: 400, fontSize: 10 },

    addressTitle: { fontSize: 9, fontStyle: "bold" },

    tabla: { fontSize: 9, fontStyle: "bold" },

    invoice: { fontSize: 20 },

    fecha: { fontSize: 13 },

    theader: {
      marginTop: 20,
      fontSize: 9,
      fontStyle: "bold",
      paddingTop: 4,
      paddingLeft: 7,
      flex: 2,
      height: 20,
      backgroundColor: "#DEDEDE",
      borderColor: "gray", // changed border color to gray
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      textAlign: "center",
    },
    theader2: {
      flex: 1.3,
      borderRightWidth: 0,
      borderBottomWidth: 1,
      height: 20,
    },

    tbody: {
      fontSize: 7,
      paddingTop: 1,
      paddingLeft: 0,
      flex: 1.5,
      borderColor: "black",
      borderBottomWidth: 1,
      borderLeftWidth: 1, // added border to the left side
      borderRightWidth: 1, // added border to the right side
      textAlign: "center",
    },
    total: {
      fontSize: 6,
      paddingTop: 1,
      paddingLeft: 7,
      flex: 1.5,
      borderColor: "black",
      borderBottomWidth: 1,
    },

    tbody2: { flex: 1, borderRightWidth: 1 },

    watermark: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "200%",
      opacity: 0.05,
      zIndex: -7,
    },
  });

  const InvoiceTitle = () => (
    <View style={styles.titleContainer}>
      <View style={styles.spaceBetween}>
        <Image style={styles.Logo} src={Logo} />
        <Text style={styles.fecha}></Text>
        <Text style={styles.invoice}>
          Reparados Nº: {ReparadosList && ReparadosList.length}
        </Text>
      </View>
    </View>
  );

  const Address = () => (
    <View style={styles.titleContainer}>
      {empresaList && empresaList.length > 0 ? (
        empresaList.map((empresa, index) => (
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
      {empresaList && empresaList.length > 0 ? (
        empresaList.map((empresa) => (
          <View style={styles.spaceDatos}>
            <View style={{ width: "100%", flexDirection: "row" }}>
              <Text style={styles.addressTitle}>Encargado </Text>
              <Text style={styles.addressTitle}>
                {empresa.dueñoDeLaEmpresa}
              </Text>
            </View>
            <View style={{ width: "100%", flexDirection: "row" }}>
              <Text style={styles.addressTitle}>Servicio: </Text>
              <Text style={styles.addressTitle}>
                {empresa.servicioDeLaEmpresa}
              </Text>
            </View>

            <View style={{ width: "100%", flexDirection: "row" }}>
              <Text style={styles.addressTitle}>Motivo :</Text>
              <Text style={styles.addressTitle}>________________</Text>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.noData}>No hay datos disponibles</Text>
      )}
    </View>
  );

  const TableHead = () => (
    <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
      <View style={[styles.theader, styles.theader2]}>
        <Text>codigo</Text>
      </View>

      <View style={styles.theader}>
        <Text>DNI</Text>
      </View>
      <View style={styles.theader}>
        <Text>Nombre</Text>
      </View>
      <View style={styles.theader}>
        <Text>telefono</Text>
      </View>
      <View style={styles.theader}>
        <Text>tipo de servicio</Text>
      </View>
      <View style={styles.theader}>
        <Text>Modelo</Text>
      </View>
      <View style={styles.theader}>
        <Text>EMEI o Codigo</Text>
      </View>

      <View style={styles.theader}>
        <Text>Fecha de ingreso</Text>
      </View>

      <View style={styles.theader}>
        <Text>Precio</Text>
      </View>
    </View>
  );

  const TableBody = () => (
    <Fragment>
      <View style={{ width: "100%", flexDirection: "column-reverse" }}>
        {ReparadosList && ReparadosList.length > 0 ? (
          ReparadosList.map((Reparados, index) => (
            <Fragment key={index}>
              <View style={{ width: "100%", flexDirection: "row" }}>
                <View style={[styles.tbody, styles.tbody2]}>
                  <Text>{Reparados.codigo}</Text>
                </View>
                <View style={styles.tbody}>
                  <Text>{Reparados.DNI}</Text>
                </View>
                <View style={styles.tbody}>
                  <Text>{Reparados.nombre}</Text>
                </View>
                <View style={styles.tbody}>
                  <Text>{Reparados.telefono_Cliente}</Text>
                </View>
                <View style={styles.tbody}>
                  <Text>{Reparados.servicio}</Text>
                </View>
                <View style={styles.tbody}>
                  <Text>{Reparados.dispositivo}</Text>
                </View>
                <View style={styles.tbody}>
                  <Text>{Reparados.EMEI}</Text>
                </View>

                <View style={styles.tbody}>
                  <Text>
                    {new Date(Reparados.fechaIngreso).toLocaleDateString()}
                  </Text>
                </View>

                <View style={styles.tbody}>
                  <Text>{Reparados.precio}</Text>
                </View>
              </View>
            </Fragment>
          ))
        ) : (
          <Text style={styles.addressTitle}>No hay datos disponibles</Text>
        )}
      </View>
    </Fragment>
  );

  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <Document>
        <Page size="A4" style={styles.page} orientation="landscape">
          <View>
            <Image src={Logo} style={styles.watermark} />
            <InvoiceTitle />
            <Address />
            <DatosClient />
            <TableHead />
            <TableBody />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
