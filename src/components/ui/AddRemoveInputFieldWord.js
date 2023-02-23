function AddRemoveInputField({ inputFields, setInputFields, placeHolders }) {
  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        langCode: '',
      },
    ]);
  };
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };
  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {inputFields.map((data, index) => {
            const { langCode, meaning } = data;
            return (
              <div className="row my-3" key={index}>
                <div className="col">
                  <div className="form-group">
                    <div className="input-row" style={{ display: 'flex' }}>
                      <div
                        className="langCode"
                        style={{
                          paddingTop: 10,
                          paddingRight: 5,
                          width: '400px',
                        }}
                      >
                        <input
                          type="text"
                          onChange={(evnt) => handleChange(index, evnt)}
                          value={langCode}
                          name="langCode"
                          className="form-control"
                          placeholder={placeHolders.key}
                        />
                      </div>

                      <div
                        className="meaning"
                        style={{
                          paddingTop: 10,
                          paddingLeft: 5,
                          width: '400px',
                        }}
                      >
                        <input
                          type="text"
                          onChange={(evnt) => handleChange(index, evnt)}
                          value={meaning}
                          name="meaning"
                          className="form-control"
                          placeholder={placeHolders.value}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  {inputFields.length !== 1 ? (
                    <button
                      className="btn btn-outline-danger"
                      onClick={removeInputFields}
                    >
                      x
                    </button>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            );
          })}

          <div className="row">
            <div className="col-sm-12">
              <button
                className="btn btn-outline-success "
                onClick={addInputField}
              >
                Yeni Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4"></div>
    </div>
  );
}
export default AddRemoveInputField;
