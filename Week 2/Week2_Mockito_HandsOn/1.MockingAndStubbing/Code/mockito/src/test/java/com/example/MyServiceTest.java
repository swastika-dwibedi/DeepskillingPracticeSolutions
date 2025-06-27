package com.example;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class MyServiceTest {

    @Test
    public void testFetchDataWithMock() {
        // Create mock
        ExternalApi mockApi = mock(ExternalApi.class);

        // Stub method
        when(mockApi.getData()).thenReturn("Mock Data");

        // Use mock in real class
        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        // Assert result
        assertEquals("Mock Data", result);
    }
}
