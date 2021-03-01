import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./data";
import Header from "./components/Header/Header";
import BarChart from "./components/BarChart/BarChart";
import Card from "./components/Card/Card";
import Amount from "./components/Amount/Amount";

const GOOGLE_CHART_LABELS = ["Step Name", "1st Run", "2nd Run", "3rd Run"];

function App() {
  const { app_name, test_run_id, time_stamp, test_cases } = data;

  // setting state here for the bar charts

  const [launchTimes, setLaunchTimes] = useState([]);
  const [cpu, setCpu] = useState([]);
  const [memory, setMemory] = useState([]);

  useEffect(() => {
    let dataArray = [];
    addLaunchTimes(dataArray);
    setLaunchTimes(dataArray);
  }, []);

  const addLaunchTimes = (DataArray) => {
    test_cases.forEach((item) => {
      item.test_steps.forEach((data) => {
        return DataArray.push([data.step_name, data.launch_times].flat());
      });
    });
  };

  useEffect(() => {
    let dataArray = [];
    addToCpu(dataArray);
    setCpu(dataArray);
  }, []);

  const addToCpu = (DataArray) => {
    test_cases.forEach((item) => {
      item.test_steps.forEach((data) => {
        return DataArray.push([data.step_name, data.cpu].flat());
      });
    });
  };

  useEffect(() => {
    let dataArray = [];
    addToMemory(dataArray);
    setMemory(dataArray);
  }, []);

  const addToMemory = (DataArray) => {
    test_cases.forEach((item) => {
      item.test_steps.forEach((data) => {
        return DataArray.push([data.step_name, data.memory].flat());
      });
    });
  };

  return (
    <div className="App">
      <Header
        appName={app_name}
        testRunId={test_run_id}
        timestamp={time_stamp}
      />

      <div>
        {test_cases.map((item) => (
          <div>
            <h2 className="test-name">{item.test_name}</h2>
            <div>
              {item.test_steps.map((data) => (
                <div className="test-case-container">
                  {/* displays if test is a success or failure */}

                  {item.status === true ? (
                    <div className="status-success">STATUS: SUCCESS</div>
                  ) : (
                    <div className="status-failure">STATUS: FAILURE</div>
                  )}

                  {/* displays test screenshot with assocaited step name, cpu, 
                  launch times, and memory */}

                  <Card
                    key={data.step_name}
                    screenshot={`/images/${data.screenshot}`}
                    stepName={data.step_name}
                    cpu={data.cpu.map((amount, index) => {
                      return <Amount key={index}>{amount}</Amount>;
                    })}
                    launchTimes={data.launch_times.map((amount, index) => {
                      return <Amount key={index}>{amount}</Amount>;
                    })}
                    memory={data.memory.map((amount, index) => {
                      return <Amount key={index}>{amount}</Amount>;
                    })}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <BarChart
        title="Launch Times"
        data={[GOOGLE_CHART_LABELS, ...launchTimes]}
        color={["#34ace2"]}
      />
      <BarChart
        title="CPU"
        data={[GOOGLE_CHART_LABELS, ...cpu]}
        color={["#8954dd"]}
      />
      <BarChart
        title="Memory"
        data={[GOOGLE_CHART_LABELS, ...memory]}
        color={["#f45c6e"]}
      />
    </div>
  );
}

export default App;
