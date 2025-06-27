package com.example;

import org.junit.After;
import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.Test;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        // Arrange: run before each test
        calculator = new Calculator();
        System.out.println("Setup: Calculator instance created.");
    }

    @After
    public void tearDown() {
        // Cleanup: run after each test
        calculator = null;
        System.out.println("Teardown: Calculator instance destroyed.");
    }

    @Test
    public void testAdd() {
        // Act
        int result = calculator.add(2, 3);

        // Assert
        assertEquals(5, result);
    }

    @Test
    public void testMultiply() {
        // Act
        int result = calculator.multiply(4, 5);

        // Assert
        assertEquals(20, result);
    }
}
