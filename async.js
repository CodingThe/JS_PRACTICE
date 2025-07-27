async function fetchData() {
  try {
    const response = await this.userService.post('/getData');

    if (!response.data) {
      throw new Error("No data received from server");
      
    }

    console.log(response.data);
    
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}
